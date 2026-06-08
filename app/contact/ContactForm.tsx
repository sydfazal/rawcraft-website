"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ContactFormData } from "@/types";

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "var(--sand-light)",
  border: "1px solid var(--sand-dark)",
  borderRadius: "0",
  fontFamily: "Jost, sans-serif",
  fontSize: "0.875rem",
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "var(--bark-light)",
  fontFamily: "Jost, sans-serif",
  marginBottom: "8px",
};

const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillSubject = searchParams.get("subject") ?? "";

  const [formData, setFormData] = useState<ContactFormData>({
    ...INITIAL_FORM_STATE,
    subject: prefillSubject,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(field: keyof ContactFormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setFormData(INITIAL_FORM_STATE);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      style={{
        background: "var(--sand-light)",
        padding: "40px 32px",
        border: "1px solid var(--sand-dark)",
      }}
    >
      {status === "success" ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "3rem",
              color: "var(--clay)",
              marginBottom: "16px",
            }}
          >
            ◈
          </div>
          <h3
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "2rem",
              color: "var(--ink)",
              marginBottom: "12px",
            }}
          >
            Message Sent!
          </h3>
          <p
            style={{
              color: "var(--bark-light)",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.9rem",
            }}
          >
            We&apos;ll get back to you within one business day.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {/* Name + Email row — stacks on mobile via contact-form-grid class */}
          <div
            className="contact-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                required
                style={inputStyle}
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Your name"
                onFocus={(e) => (e.target.style.borderColor = "var(--bark)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--sand-dark)")
                }
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                required
                type="email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="your@email.com"
                onFocus={(e) => (e.target.style.borderColor = "var(--bark)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--sand-dark)")
                }
              />
            </div>
          </div>

          {/* Phone + Subject row */}
          <div
            className="contact-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel"
                style={inputStyle}
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="+91 xxxxx xxxxx"
                onFocus={(e) => (e.target.style.borderColor = "var(--bark)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--sand-dark)")
                }
              />
            </div>
            <div>
              <label style={labelStyle}>Subject *</label>
              <select
                required
                style={inputStyle}
                value={formData.subject}
                onChange={handleChange("subject")}
                onFocus={(e) => (e.target.style.borderColor = "var(--bark)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--sand-dark)")
                }
              >
                <option value="">Select a subject</option>
                <option>Product Enquiry</option>
                <option>Bulk Order Quote</option>
                <option>Stock Availability</option>
                <option>Delivery Information</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Message *</label>
            <textarea
              required
              rows={6}
              style={{ ...inputStyle, resize: "vertical" }}
              value={formData.message}
              onChange={handleChange("message")}
              placeholder="Tell us what you're looking for..."
              onFocus={(e) => (e.target.style.borderColor = "var(--bark)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--sand-dark)")}
            />
          </div>

          {status === "error" && (
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--clay)",
                fontFamily: "Jost, sans-serif",
              }}
            >
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "loading"}
            style={{
              alignSelf: "flex-start",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message →"}
          </button>
        </form>
      )}
    </div>
  );
}
