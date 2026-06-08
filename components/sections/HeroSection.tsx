"use client";

import Link from "next/link";

const STATS = [
  { number: "50+", label: "Materials" },
  { number: "12+", label: "Categories" },
  { number: "500+", label: "Craftsmen Served" },
];

const MATERIAL_TAGS = [
  { label: "Teak", position: { top: "14%", left: "8%" } },
  { label: "Velvet", position: { top: "12%", right: "8%" } },
  { label: "Foam", position: { bottom: "16%", left: "8%" } },
  { label: "Rattan", position: { bottom: "14%", right: "8%" } },
];

const RINGS = [
  { size: 580, cls: "ring-1", opacity: 0.08 },
  { size: 420, cls: "ring-2", opacity: 0.13 },
  { size: 260, cls: "ring-3", opacity: 0.18 },
];

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Left: Text ── */}
      <div
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 64px 80px",
          background: "var(--cream)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Subtle background blob */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(193,127,74,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div className="hero-badge" style={{ marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--sand)",
              border: "1px solid var(--sand-dark)",
              padding: "6px 14px 6px 8px",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--bark-light)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--clay)",
                boxShadow: "0 0 0 3px rgba(193,127,74,0.25)",
                flexShrink: 0,
              }}
            />
            Raw Material Store · Est. 2010
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
            fontWeight: 300,
            color: "var(--ink)",
            lineHeight: 1.0,
            marginBottom: "32px",
            letterSpacing: "-0.01em",
          }}
        >
          <span className="hero-title-word" style={{ display: "block" }}>
            Where Great
          </span>
          <span className="hero-title-word" style={{ display: "block" }}>
            <em
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, var(--bark) 0%, var(--clay) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Furniture
            </em>
          </span>
          <span className="hero-title-word" style={{ display: "block" }}>
            Begins.
          </span>
        </h1>

        {/* Animated divider */}
        <div className="hero-divider-line" style={{ marginBottom: "28px" }} />

        {/* Body */}
        <p
          className="hero-body-text"
          style={{
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "var(--bark-light)",
            maxWidth: "360px",
            marginBottom: "48px",
          }}
        >
          Premium fabrics, solid woods, quality foams — everything your craft
          demands, curated for furniture makers who refuse to compromise.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta-buttons hero-cta-row"
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/products"
            className="btn-primary-shimmer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--cream)",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "15px 32px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Browse Materials
            <span style={{ fontSize: "1rem", marginTop: "-1px" }}>→</span>
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
            style={{ textDecoration: "none" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "72px",
            display: "flex",
            gap: "0",
            borderTop: "1px solid var(--sand-dark)",
            paddingTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {STATS.map(({ number, label }, i) => (
            <div
              key={label}
              className="hero-stat-item"
              style={{
                flex: "1",
                minWidth: "80px",
                paddingRight: i < STATS.length - 1 ? "24px" : "0",
                marginRight: i < STATS.length - 1 ? "24px" : "0",
                borderRight:
                  i < STATS.length - 1 ? "1px solid var(--sand-dark)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2.2rem",
                  color: "var(--bark)",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {number}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--bark-light)",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Visual panel ── */}
      <div
        className="hero-visual-panel"
        style={{
          background:
            "linear-gradient(150deg, var(--sand-light) 0%, var(--sand) 35%, var(--sand-dark) 65%, #C9A882 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(193,127,74,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Spinning rings */}
        {RINGS.map(({ size, cls, opacity }) => (
          <div
            key={size}
            className={cls}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: `1px solid rgba(92, 61, 30, ${opacity})`,
              top: "50%",
              left: "50%",
            }}
          />
        ))}

        {/* Dashed accent ring */}
        <div
          style={{
            position: "absolute",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            border: "1px dashed rgba(92, 61, 30, 0.2)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "spinReverse 25s linear infinite",
          }}
        />

        {/* Central ornament */}
        <div
          className="ornament-float"
          style={{
            textAlign: "center",
            zIndex: 2,
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              background:
                "radial-gradient(circle, rgba(193,127,74,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(6rem, 10vw, 9rem)",
              color: "rgba(92, 61, 30, 0.2)",
              lineHeight: 1,
              userSelect: "none",
              position: "relative",
              textShadow: "0 4px 24px rgba(92, 61, 30, 0.15)",
            }}
          >
            ◈
          </div>
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.85rem",
              color: "var(--bark)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontStyle: "italic",
              opacity: 0.7,
              marginTop: "8px",
            }}
          >
            Est. 2010
          </div>
        </div>

        {/* Floating material tags */}
        {MATERIAL_TAGS.map(({ label, position }) => (
          <span
            key={label}
            className="material-tag"
            style={{
              position: "absolute",
              ...position,
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "var(--bark)",
              letterSpacing: "0.12em",
              background: "rgba(253, 250, 244, 0.6)",
              border: "1px solid rgba(92, 61, 30, 0.15)",
              padding: "6px 14px",
              backdropFilter: "blur(4px)",
            }}
          >
            {label}
          </span>
        ))}

        {/* Corner dots */}
        {[
          { top: "24px", left: "24px" },
          { top: "24px", right: "24px" },
          { bottom: "24px", left: "24px" },
          { bottom: "24px", right: "24px" },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...pos,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "rgba(92, 61, 30, 0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
