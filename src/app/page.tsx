"use client";

import Link from "next/link";
import { useBrand } from "@/themes/BrandProvider";

const pocSections = [
  {
    href: "/recipes",
    title: "📖 Recipes (API Integration)",
    description:
      "Mock recipe API → DevLink CardRecipe component. Shows how external data can be loaded into Webflow-designed components. Includes filters and detail pages.",
    color: "#00ac8e",
  },
  {
    href: "/winkels",
    title: "📍 Store Locator (Google Maps)",
    description:
      "Google Maps embed alongside DevLink components. Shows how external APIs (maps, location) can be integrated into the platform.",
    color: "#1a5eae",
  },
  {
    href: "/components",
    title: "🧩 Webflow Code Components",
    description:
      "RecipeCard and IngredientChecklist — custom React components registered via .webflow.tsx files. Designers configure props in the Designer, logic runs in React.",
    color: "#e65100",
  },
  {
    href: "/poc",
    title: "📋 POC Findings",
    description:
      "Overview of all findings, possibilities, and limitations. Includes recommendations for the multi-brand strategy.",
    color: "#7857bc",
  },
];

export default function Home() {
  const { brandName } = useBrand();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 60px",
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: 100,
            background: "var(--brand-primary, var(--_color---primary-green))",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 20,
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Proof of Concept
        </span>
        <h1
          style={{
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 600,
            color:
              "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            marginTop: 0,
            marginBottom: 16,
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
          }}
        >
          Webflow + Next.js
          <br />
          Multi-Brand Platform
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color:
              "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            maxWidth: 580,
            margin: "0 auto 12px",
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
          }}
        >
          Discover how Webflow DevLink components can be combined with Next.js, external APIs, and a multi-brand theme system.
        </p>
        <p
          style={{
            fontSize: 15,
            color:
              "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            opacity: 0.7,
          }}
        >
          👉 Use the <strong>Brand Switcher</strong> in the bottom right to switch between brands.
          <br />
          You are currently viewing: <strong>{brandName}</strong>
        </p>
      </section>

      {/* POC sections grid */}
      <section
        style={{
          padding: "0 24px 80px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {pocSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            style={{
              textDecoration: "none",
              padding: 28,
              borderRadius: "var(--brand-radius-sm, 24px)",
              background: "var(--brand-surface, #fff)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              transition: "all 0.25s ease",
              border: "1px solid transparent",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = section.color + "40";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <h2
              style={{
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                fontSize: 20,
                fontWeight: 600,
                margin: 0,
                color:
                  "var(--brand-text-primary, var(--_color---semantic--text--primary))",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                color:
                  "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              }}
            >
              {section.description}
            </p>
            <span
              style={{
                marginTop: "auto",
                paddingTop: 8,
                fontSize: 14,
                fontWeight: 600,
                color: section.color,
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              }}
            >
              View →
            </span>
          </Link>
        ))}
      </section>

      {/* Architecture info */}
      <section
        style={{
          padding: "48px 24px",
          maxWidth: 1200,
          margin: "0 auto 80px",
          borderRadius: "var(--brand-radius-sm, 24px)",
          background:
            "var(--brand-primary-darker, var(--_color---semantic--background--brand-darker))",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            fontSize: 24,
            fontWeight: 600,
            marginTop: 0,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          🏗️ Architecture
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
            textAlign: "center",
          }}
        >
          {[
            {
              label: "Webflow Designer",
              sub: "Visual design",
              icon: "🎨",
            },
            { label: "DevLink (one-way)", sub: "Auto-gen components", icon: "🔗" },
            { label: "Next.js App", sub: "Pages + API integration", icon: "⚡" },
            { label: "Brand Themes", sub: "CSS custom properties", icon: "🎭" },
            { label: "Cloudflare", sub: "Edge deployment", icon: "☁️" },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
