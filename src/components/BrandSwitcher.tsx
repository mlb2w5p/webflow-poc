"use client";

import { useBrand, BrandId } from "@/themes/BrandProvider";

const brands: { id: BrandId; label: string; color: string }[] = [
  { id: "boni", label: "Boni", color: "#00ac8e" },
  { id: "freshmart", label: "FreshMart", color: "#1a5eae" },
  { id: "natuurwinkel", label: "Natuurwinkel", color: "#6b8e23" },
];

export function BrandSwitcher() {
  const { brand, setBrand } = useBrand();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 16,
        borderRadius: 16,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        border: "1px solid rgba(0,0,0,0.06)",
        fontFamily: "var(--brand-font-family, sans-serif)",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "#999",
          marginBottom: 4,
        }}
      >
        POC: Switch Brand
      </span>
      {brands.map((b) => (
        <button
          key={b.id}
          onClick={() => setBrand(b.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 16px",
            border:
              brand === b.id
                ? `2px solid ${b.color}`
                : "2px solid transparent",
            borderRadius: 10,
            background: brand === b.id ? `${b.color}15` : "transparent",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: brand === b.id ? 600 : 400,
            color: brand === b.id ? b.color : "#666",
            transition: "all 0.2s ease",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: b.color,
              flexShrink: 0,
            }}
          />
          {b.label}
        </button>
      ))}
    </div>
  );
}
