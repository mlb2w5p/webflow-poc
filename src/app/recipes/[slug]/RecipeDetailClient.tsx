"use client";

import Link from "next/link";
import type { Recipe } from "@/lib/recipes-api";

export function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      {/* Hero image */}
      <div
        style={{
          position: "relative",
          height: "clamp(300px, 50vw, 500px)",
          overflow: "hidden",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            padding: "0 24px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Link
            href="/recipes"
            style={{
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 12,
              fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            }}
          >
            ← Terug naar recepten
          </Link>
          <h1
            style={{
              fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            {recipe.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Meta badges */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {[
            { label: recipe.kcal, icon: "🔥" },
            { label: recipe.time, icon: "⏱️" },
            { label: recipe.difficulty, icon: "📊" },
            { label: `${recipe.servings} personen`, icon: "👥" },
          ].map((badge) => (
            <span
              key={badge.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: "var(--brand-radius-sm, 24px)",
                background: "var(--brand-surface, #fff)",
                fontSize: 14,
                fontWeight: 500,
                color:
                  "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {badge.icon} {badge.label}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 14px",
                borderRadius: 100,
                background:
                  "var(--brand-primary, var(--_color---primary-green))",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color:
              "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            marginBottom: 40,
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
          }}
        >
          {recipe.description}
        </p>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 32,
          }}
        >
          {/* Ingredients */}
          <div
            style={{
              padding: 28,
              borderRadius: "var(--brand-radius-sm, 24px)",
              background: "var(--brand-surface, #fff)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                fontSize: 22,
                fontWeight: 600,
                marginTop: 0,
                marginBottom: 16,
                color:
                  "var(--brand-text-primary, var(--_color---semantic--text--primary))",
              }}
            >
              Ingrediënten
            </h2>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {recipe.ingredients.split(", ").map((ingredient, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 15,
                    color:
                      "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                    fontFamily:
                      "var(--brand-font-family, Fredoka, sans-serif)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background:
                        "var(--brand-primary, var(--_color---primary-green))",
                      flexShrink: 0,
                    }}
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div
            style={{
              padding: 28,
              borderRadius: "var(--brand-radius-sm, 24px)",
              background: "var(--brand-surface, #fff)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                fontSize: 22,
                fontWeight: 600,
                marginTop: 0,
                marginBottom: 16,
                color:
                  "var(--brand-text-primary, var(--_color---semantic--text--primary))",
              }}
            >
              Bereidingswijze
            </h2>
            <ol
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {recipe.steps.map((step, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color:
                      "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                    fontFamily:
                      "var(--brand-font-family, Fredoka, sans-serif)",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background:
                        "var(--brand-primary, var(--_color---primary-green))",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 600,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
