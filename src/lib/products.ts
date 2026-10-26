import { getCollection } from 'astro:content';

/** 作品を `order` の昇順で返す（トップの並び順と前後ナビの順序に使う） */
export async function getProducts() {
  const products = await getCollection('products');
  return products.sort((a, b) => a.data.order - b.data.order);
}
