"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--sand-light)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(245, 236, 215, 0.15)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.75rem",
                fontWeight: 500,
                color: "var(--sand)",
                marginBottom: "16px",
              }}
            >
              RawCraft<span style={{ color: "var(--clay)" }}>.</span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.8",
                color: "rgba(245, 236, 215, 0.7)",
                maxWidth: "300px",
              }}
            >
              Premium raw materials for furniture craftsmen. Sourced
              responsibly, delivered with care.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--clay)",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </div>
            {[
              { label: "Products", href: "/products" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "rgba(245, 236, 215, 0.7)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--sand)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245, 236, 215, 0.7)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--clay)",
                marginBottom: "20px",
              }}
            >
              Reach Us
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(245, 236, 215, 0.7)",
                lineHeight: "1.8",
              }}
            >
              contact@rawcraft.in
              <br />
              +91 98765 43210
            </p>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.75rem",
            color: "rgba(245, 236, 215, 0.4)",
          }}
        >
          <span>© {currentYear} RawCraft. All rights reserved.</span>
          <span>Crafted with care in India</span>
        </div>
      </div>
    </footer>
  );
}
