import { getCollection, type CollectionEntry } from 'astro:content';

type Activity = CollectionEntry<'activities'>;

/** 活動を `order` の昇順（古い順）で返す */
export async function getActivities() {
  const activities = await getCollection('activities');
  return activities.sort((a, b) => a.data.order - b.data.order);
}

/** 本文を書いた活動だけ詳細ページを持つ（本文が空なら一覧に表示するだけ） */
export function hasDetail(activity: Activity) {
  return Boolean(activity.body?.trim());
}
