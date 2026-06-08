"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { urlFor } from "@/sanity/lib/client";

interface ProductCardProps {
  product: Product;
}

function PlaceholderImage({ name }: { name: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4/3",
        background:
          "linear-gradient(135deg, var(--sand) 0%, var(--sand-dark) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div style={{ fontSize: "2rem", opacity: 0.4 }}>◈</div>
      <span
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--bark-light)",
          opacity: 0.7,
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.images?.[0];
  const imageUrl = firstImage
    ? urlFor(firstImage).width(640).height(480).fit("crop").auto("format").url()
    : null;

  return (
    <Link
      href={`/products/${product.slug.current}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="product-card"
        style={{ background: "var(--cream)", overflow: "hidden" }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "4/3",
          }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={firstImage?.alt ?? product.name}
              fill
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <PlaceholderImage name={product.name} />
          )}

          {!product.inStock && (
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "var(--bark)",
                color: "var(--cream)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                fontFamily: "Jost, sans-serif",
                zIndex: 1,
              }}
            >
              Out of Stock
            </div>
          )}
          {product.featured && product.inStock && (
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "var(--clay)",
                color: "var(--cream)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                fontFamily: "Jost, sans-serif",
                zIndex: 1,
              }}
            >
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px 24px" }}>
          <div
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--clay)",
              marginBottom: "8px",
              fontFamily: "Jost, sans-serif",
            }}
          >
            {product.category?.name}
          </div>
          <h3
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: "8px",
            }}
          >
            {product.name}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--bark-light)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {product.material}
          </p>

          {product.availableColors?.length > 0 && (
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {product.availableColors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--bark-light)",
                    border: "1px solid var(--sand-dark)",
                    padding: "3px 8px",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  {color}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
