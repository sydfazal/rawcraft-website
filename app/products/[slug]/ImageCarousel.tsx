"use client";

import { useState } from "react";
import Image from "next/image";
import { SanityImage } from "@/types";
import { urlFor } from "@/sanity/lib/client";

interface ImageCarouselProps {
  images: SanityImage[];
  productName: string;
}

export default function ImageCarousel({
  images,
  productName,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div
        style={{
          aspectRatio: "4/3",
          background:
            "linear-gradient(135deg, var(--sand) 0%, var(--sand-dark) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ fontSize: "4rem", color: "rgba(92, 61, 30, 0.2)" }}>
          ◈
        </div>
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--bark-light)",
            fontFamily: "Jost, sans-serif",
          }}
        >
          {productName}
        </span>
      </div>
    );
  }

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  function goToPrev() {
    if (canGoPrev) setActiveIndex((i) => i - 1);
  }

  function goToNext() {
    if (canGoNext) setActiveIndex((i) => i + 1);
  }

  const activeImage = images[activeIndex];
  const imageUrl = urlFor(activeImage)
    .width(800)
    .height(600)
    .fit("crop")
    .auto("format")
    .url();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Main image with nav arrows */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          background: "var(--sand)",
        }}
      >
        <Image
          key={imageUrl}
          src={imageUrl}
          alt={activeImage.alt ?? productName}
          fill
          style={{ objectFit: "cover", transition: "opacity 0.3s ease" }}
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Image counter */}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(28, 18, 8, 0.6)",
              color: "var(--sand)",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              padding: "4px 10px",
              backdropFilter: "blur(4px)",
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {/* Prev button */}
        {canGoPrev && (
          <button
            onClick={goToPrev}
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              background: "rgba(253, 250, 244, 0.9)",
              border: "1px solid var(--sand-dark)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              color: "var(--bark)",
              transition: "background 0.2s ease",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--cream)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(253, 250, 244, 0.9)")
            }
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Next button */}
        {canGoNext && (
          <button
            onClick={goToNext}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              background: "rgba(253, 250, 244, 0.9)",
              border: "1px solid var(--sand-dark)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              color: "var(--bark)",
              transition: "background 0.2s ease",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--cream)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(253, 250, 244, 0.9)")
            }
            aria-label="Next image"
          >
            →
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "4px",
          }}
        >
          {images.map((image, index) => {
            const thumbUrl = urlFor(image)
              .width(160)
              .height(120)
              .fit("crop")
              .auto("format")
              .url();
            const isActive = index === activeIndex;
            return (
              <button
                key={image._key ?? image.asset._ref}
                onClick={() => setActiveIndex(index)}
                style={{
                  position: "relative",
                  width: "80px",
                  height: "60px",
                  flexShrink: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isActive
                    ? "2px solid var(--bark)"
                    : "2px solid transparent",
                  padding: 0,
                  background: "none",
                  transition: "border-color 0.2s ease",
                  opacity: isActive ? 1 : 0.6,
                }}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={thumbUrl}
                  alt={image.alt ?? `${productName} image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            paddingTop: "4px",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background:
                  index === activeIndex ? "var(--bark)" : "var(--sand-dark)",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.2s ease",
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
