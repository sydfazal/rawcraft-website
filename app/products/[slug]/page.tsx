import { getProductBySlug, getAllProductSlugs } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ImageCarousel from "./ImageCarousel";

export const revalidate = 60;

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  if (!product) return { title: "Product Not Found" };
  return { title: product.name, description: product.description };
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs().catch(() => []);
  return slugs.map(({ slug }) => ({ slug: slug.current }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  if (!product) notFound();

  return (
    <div
      style={{
        paddingTop: "72px",
        minHeight: "100vh",
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 24px 64px",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            marginBottom: "40px",
            fontSize: "0.75rem",
            fontFamily: "Jost, sans-serif",
            color: "var(--bark-light)",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--bark-light)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>›</span>
          <Link
            href="/products"
            style={{ color: "var(--bark-light)", textDecoration: "none" }}
          >
            Products
          </Link>
          <span>›</span>
          <span style={{ color: "var(--bark)" }}>{product.name}</span>
        </div>

        <div
          className="product-detail-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <ImageCarousel
            images={product.images ?? []}
            productName={product.name}
          />

          <div style={{ paddingTop: "8px" }}>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--clay)",
                fontFamily: "Jost, sans-serif",
                marginBottom: "12px",
              }}
            >
              {product.category?.name}
            </div>
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </h1>

            <div className="divider" style={{ marginBottom: "28px" }} />

            {product.description && (
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "var(--bark-light)",
                  marginBottom: "32px",
                }}
              >
                {product.description}
              </p>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              {[
                { label: "Material", value: product.material },
                {
                  label: "Stock",
                  value: product.inStock ? "● In Stock" : "○ Out of Stock",
                  color: product.inStock ? "var(--moss)" : "var(--clay)",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "14px 16px",
                    background: "var(--sand-light)",
                    borderLeft: "2px solid var(--clay)",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--clay)",
                      fontFamily: "Jost, sans-serif",
                      minWidth: "72px",
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: color ?? "var(--ink)",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}

              {product.availableColors?.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "14px 16px",
                    background: "var(--sand-light)",
                    borderLeft: "2px solid var(--clay)",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--clay)",
                      fontFamily: "Jost, sans-serif",
                      minWidth: "72px",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    Colors
                  </span>
                  <div
                    style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}
                  >
                    {product.availableColors.map((color: string) => (
                      <span
                        key={color}
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--bark)",
                          border: "1px solid var(--sand-dark)",
                          padding: "2px 10px",
                          fontFamily: "Jost, sans-serif",
                        }}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/contact?subject=Enquiry about ${encodeURIComponent(product.name)}`}
              className="btn-primary"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              Enquire About This Product →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
