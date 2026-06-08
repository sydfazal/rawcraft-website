"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const headerBg =
    isScrolled || isMenuOpen ? "rgba(253, 250, 244, 0.98)" : "transparent";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: headerBg,
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--sand-dark)"
          : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--bark)",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          RawCraft
          <span style={{ color: "var(--clay)", marginLeft: "2px" }}>.</span>
        </Link>

        {/* Desktop links */}
        <div
          className="nav-desktop-links"
          style={{ display: "flex", alignItems: "center", gap: "40px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--bark)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--clay)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--bark)")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: "0.7rem",
              textDecoration: "none",
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger button — hidden on desktop via CSS */}
        <button
          className="nav-hamburger"
          onClick={() => setIsMenuOpen((o) => !o)}
          style={{
            display: "none", // shown via media query
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "40px",
            height: "40px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--bark)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMenuOpen
                ? "translateY(6.5px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--bark)",
              transition: "opacity 0.3s ease",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--bark)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMenuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer — hidden on desktop via CSS */}
      <div
        className="nav-mobile-menu"
        style={{
          display: "none", // shown via media query
          flexDirection: "column",
          background: "var(--cream)",
          borderTop: "1px solid var(--sand-dark)",
          padding: isMenuOpen ? "32px 24px 40px" : "0 24px",
          maxHeight: isMenuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease, padding 0.3s ease",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--bark)",
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid var(--sand-dark)",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="btn-primary"
          style={{
            textDecoration: "none",
            marginTop: "24px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
