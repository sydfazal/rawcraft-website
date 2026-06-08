import { sanityClient } from './client';
import { Product, Category } from '@/types';

// All GROQ queries live here — single source of truth for data fetching

const productFields = `
  _id,
  name,
  slug,
  description,
  material,
  availableColors,
  inStock,
  featured,
  images,
  category->{ _id, name, slug }
`;

export async function getFeaturedProducts(): Promise<Product[]> {
  return sanityClient.fetch(
    `*[_type == "product" && featured == true] | order(_createdAt desc)[0...6] { ${productFields} }`
  );
}

export async function getAllProducts(categorySlug?: string): Promise<Product[]> {
  const filter = categorySlug
    ? `*[_type == "product" && category->slug.current == $categorySlug]`
    : `*[_type == "product"]`;

  return sanityClient.fetch(
    `${filter} | order(_createdAt desc) { ${productFields} }`,
    { categorySlug }
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] { ${productFields} }`,
    { slug }
  );
}

export async function getAllCategories(): Promise<Category[]> {
  return sanityClient.fetch(
    `*[_type == "category"] | order(name asc) { _id, name, slug, description }`
  );
}

export async function getAllProductSlugs(): Promise<{ slug: { current: string } }[]> {
  return sanityClient.fetch(`*[_type == "product"] { slug }`);
}
