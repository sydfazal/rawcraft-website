"use client";

import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      style={{
        background: "var(--bark)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "20vw",
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        RawCraft
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--clay-light)",
            fontFamily: "Jost, sans-serif",
            fontWeight: 500,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Ready to Create?
        </span>
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "var(--sand)",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          Let's talk about what
          <br />
          your workshop needs.
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(245, 236, 215, 0.7)",
            maxWidth: "480px",
            margin: "0 auto 40px",
          }}
        >
          Whether you need a single roll of fabric or a bulk order of solid wood
          planks — we're here to help you source it right.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--clay)",
            color: "var(--cream)",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "16px 40px",
            textDecoration: "none",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--clay-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--clay)")
          }
        >
          Contact Us →
        </Link>
      </div>
    </section>
  );
}
