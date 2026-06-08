export interface SanityImage {
  _type: "image";
  _key?: string; // ← this line is missing in your local file
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  crop?: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
  };
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
