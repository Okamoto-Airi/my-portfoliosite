/**
 * アクセス解析（GA4）。次のイベントを送る。
 *
 *   page_view       ページが開かれた
 *   read_to_end     作品ページを最後まで見た
 *   contact_click   Email / GitHub のリンクを押した
 *   work_link_click 作品の公開サイト・リポジトリのリンクを押した
 *
 * - 測定IDが未設定なら何も送らない。
 * - 開発中（pnpm dev）は送らず、コンソールにイベントを出す。
 * - 自分のアクセスを除くため、?notrack=1 を付けて開くと、そのブラウザでは送らなくなる（?notrack=0 で戻る）。
 */

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID: string = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '';
const OPT_OUT_KEY = 'analytics-optout';
/** 「最後まで見た」とみなす最短の表示時間。短いページで開いた瞬間に数えないため */
const MIN_READ_MS = 3000;

function isOptedOut(): boolean {
  try {
    const flag = new URL(location.href).searchParams.get('notrack');
    if (flag === '1') localStorage.setItem(OPT_OUT_KEY, '1');
    if (flag === '0') localStorage.removeItem(OPT_OUT_KEY);
    return localStorage.getItem(OPT_OUT_KEY) === '1';
  } catch {
    // localStorage が使えないブラウザでは、除外せずに計測する
    return false;
  }
}

const enabled = import.meta.env.PROD && MEASUREMENT_ID !== '' && !isOptedOut();

function loadGtag() {
  window.dataLayer = window.dataLayer || [];
  // gtag.js は配列ではなく arguments オブジェクトを受け取る
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // page_view は ClientRouter の画面遷移ごとに自分で送る
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.append(script);
}

export function track(name: string, params: Params = {}) {
  if (import.meta.env.DEV) console.debug('[analytics]', name, params);
  if (enabled) window.gtag('event', name, params);
}

/** data-track-link-type → link_type のように、data 属性名をイベントのパラメータ名にする */
function paramsFrom(el: HTMLElement): Params {
  const params: Params = {};
  for (const [key, value] of Object.entries(el.dataset)) {
    if (!key.startsWith('track') || key === 'track' || value === undefined) continue;
    const name = key.slice('track'.length).replace(/^[A-Z]/, (c) => c.toLowerCase());
    params[name.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`)] = value;
  }
  return params;
}

// --- 動いた：data-track="イベント名" を付けたリンクのクリック ----------------
document.addEventListener('click', (event) => {
  const el = (event.target as Element | null)?.closest<HTMLElement>('[data-track]');
  if (el?.dataset.track) track(el.dataset.track, paramsFrom(el));
});

// --- 読まれた：data-track-end を付けた目印が画面に入った ---------------------
let readObserver: IntersectionObserver | undefined;
let readTimers: number[] = [];

function observeReadEnd() {
  readObserver?.disconnect();
  readTimers.forEach(clearTimeout);
  readTimers = [];

  const targets = document.querySelectorAll<HTMLElement>('[data-track-end]');
  if (targets.length === 0 || !('IntersectionObserver' in window)) return;

  const shownAt = performance.now();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const el = entry.target as HTMLElement;
      const wait = Math.max(0, MIN_READ_MS - (performance.now() - shownAt));
      readTimers.push(
        window.setTimeout(
          () => track('read_to_end', { content_type: el.dataset.trackEnd ?? '', item_id: el.dataset.trackItemId ?? '' }),
          wait,
        ),
      );
    }
  });
  targets.forEach((el) => observer.observe(el));
  readObserver = observer;
}

// --- 届いた：ページが開かれた（最初の表示と、画面遷移のたび） ----------------
let previousUrl = document.referrer;

document.addEventListener('astro:page-load', () => {
  track('page_view', {
    page_title: document.title,
    page_location: location.href,
    page_referrer: previousUrl,
  });
  previousUrl = location.href;
  observeReadEnd();
});

if (enabled) loadGtag();
