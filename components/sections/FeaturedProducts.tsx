"use client";

import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const displayProducts = products.length > 0 ? products : getMockProducts();

  return (
    <section
      className="section-padding"
      style={{ padding: "120px 32px", background: "var(--sand-light)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="featured-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--clay)",
                fontFamily: "Jost, sans-serif",
                fontWeight: 500,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Handpicked for You
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--ink)",
                fontWeight: 400,
              }}
            >
              Featured Materials
            </h2>
          </div>
          <Link
            href="/products"
            className="btn-outline"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
          >
            View All →
          </Link>
        </div>

        <div
          className="products-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {displayProducts.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getMockProducts(): Product[] {
  return [
    {
      _id: "1",
      name: "Teak Solid Wood",
      slug: { current: "teak-solid-wood" },
      material: "Grade A Teak",
      availableColors: ["Natural", "Walnut", "Ebony"],
      inStock: true,
      featured: true,
      description: "",
      images: [],
      category: { _id: "c1", name: "Wood", slug: { current: "wood" } },
    },
    {
      _id: "2",
      name: "High-Density Foam",
      slug: { current: "high-density-foam" },
      material: "40D Density Foam",
      availableColors: ["Standard"],
      inStock: true,
      featured: true,
      description: "",
      images: [],
      category: { _id: "c2", name: "Foam", slug: { current: "foam" } },
    },
    {
      _id: "3",
      name: "Velvet Upholstery",
      slug: { current: "velvet-upholstery" },
      material: "Premium Velvet",
      availableColors: ["Ivory", "Dusty Rose", "Midnight"],
      inStock: true,
      featured: true,
      description: "",
      images: [],
      category: { _id: "c3", name: "Fabric", slug: { current: "fabric" } },
    },
    {
      _id: "4",
      name: "Sheesham Plank",
      slug: { current: "sheesham-plank" },
      material: "Indian Rosewood",
      availableColors: ["Natural", "Honey"],
      inStock: true,
      featured: false,
      description: "",
      images: [],
      category: { _id: "c1", name: "Wood", slug: { current: "wood" } },
    },
    {
      _id: "5",
      name: "Linen Blend Fabric",
      slug: { current: "linen-blend-fabric" },
      material: "70% Linen, 30% Cotton",
      availableColors: ["Sand", "Cream", "Charcoal"],
      inStock: true,
      featured: false,
      description: "",
      images: [],
      category: { _id: "c3", name: "Fabric", slug: { current: "fabric" } },
    },
    {
      _id: "6",
      name: "Rattan Webbing",
      slug: { current: "rattan-webbing" },
      material: "Natural Rattan",
      availableColors: ["Natural"],
      inStock: false,
      featured: false,
      description: "",
      images: [],
      category: { _id: "c4", name: "Rattan", slug: { current: "rattan" } },
    },
  ];
}
