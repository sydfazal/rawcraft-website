import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with us for product enquiries, bulk orders, or any questions.",
};

export default function ContactPage() {
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
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 400,
              color: "var(--ink)",
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 80px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: "24px",
              }}
            >
              We&apos;d love to hear from you.
            </h2>
            <div className="divider" style={{ marginBottom: "32px" }} />
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "var(--bark-light)",
                marginBottom: "40px",
              }}
            >
              Have a question about our materials? Need a bulk quote? Drop us a
              message and we&apos;ll get back to you within one business day.
            </p>
            {[
              { label: "Email", value: "contact@rawcraft.in" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Hours", value: "Mon–Sat, 10am–7pm IST" },
              { label: "Address", value: "Bengaluru, Karnataka, India" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--clay)",
                    fontFamily: "Jost, sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--bark)",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          <Suspense
            fallback={
              <div style={{ padding: "48px", background: "var(--sand-light)" }}>
                Loading form...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
