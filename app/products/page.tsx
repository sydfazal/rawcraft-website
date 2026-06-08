import { getAllProducts, getAllCategories } from "@/sanity/lib/queries";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { Category } from "@/types";

export const revalidate = 60;

export const metadata = {
  title: "Products",
  description:
    "Browse our full range of premium raw materials for furniture making.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category: categorySlug } = await searchParams;

  const [products, categories] = await Promise.all([
    getAllProducts(categorySlug).catch(() => []),
    getAllCategories().catch(() => [] as Category[]),
  ]);

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
          background: "var(--sand)",
          padding: "80px 24px 64px",
          borderBottom: "1px solid var(--sand-dark)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Catalog
          </span>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: "32px",
            }}
          >
            All Materials
          </h1>

          {categories.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <Link
                href="/products"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 20px",
                  textDecoration: "none",
                  border: "1px solid var(--bark)",
                  background: !categorySlug ? "var(--bark)" : "transparent",
                  color: !categorySlug ? "var(--cream)" : "var(--bark)",
                  transition: "all 0.2s ease",
                }}
              >
                All
              </Link>
              {categories.map((cat: Category) => (
                <Link
                  key={cat._id}
                  href={`/products?category=${cat.slug.current}`}
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "8px 20px",
                    textDecoration: "none",
                    border: "1px solid var(--bark)",
                    background:
                      categorySlug === cat.slug.current
                        ? "var(--bark)"
                        : "transparent",
                    color:
                      categorySlug === cat.slug.current
                        ? "var(--cream)"
                        : "var(--bark)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 24px 64px",
        }}
      >
        {products.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.5rem",
                color: "var(--bark-light)",
              }}
            >
              No products found. Check back soon.
            </p>
          </div>
        ) : (
          <div
            className="products-page-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
