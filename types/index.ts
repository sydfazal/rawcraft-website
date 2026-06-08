export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: Category;
  description: string;
  images: SanityImage[];
  material: string;
  availableColors: string[];
  inStock: boolean;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
