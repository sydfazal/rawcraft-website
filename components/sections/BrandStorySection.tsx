"use client";

export default function BrandStorySection() {
  const pillars = [
    {
      icon: "◉",
      title: "Responsibly Sourced",
      body: "Every material is traced back to its origin. We partner only with suppliers who share our commitment to sustainable practices.",
    },
    {
      icon: "◈",
      title: "Craftsman Grade",
      body: "We stock the grades that professionals demand — not the consumer-grade alternatives that cut corners.",
    },
    {
      icon: "◎",
      title: "Fast & Reliable",
      body: "Pan-India delivery with dedicated support. Your workshop timeline is our timeline.",
    },
  ];

  return (
    <section
      className="section-padding"
      style={{ padding: "120px 32px", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="brand-story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
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
              Our Story
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Built for those who
              <em style={{ fontStyle: "italic", color: "var(--bark)" }}>
                {" "}
                build
              </em>
              .
            </h2>
            <div className="divider" style={{ marginBottom: "28px" }} />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "var(--bark-light)",
                marginBottom: "20px",
              }}
            >
              We started as furniture makers ourselves. We know the frustration
              of settling for substandard materials because the good stuff was
              hard to find, inconsistently stocked, or required minimum orders
              your workshop couldn&apos;t justify.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "var(--bark-light)",
              }}
            >
              RawCraft exists to fix that. One source, premium quality, no
              compromise.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {pillars.map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "24px",
                  border: "1px solid var(--sand-dark)",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--clay)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "var(--sand-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--sand-dark)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.5rem",
                    color: "var(--clay)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginBottom: "8px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "var(--bark-light)",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
