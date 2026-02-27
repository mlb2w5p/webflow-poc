"use client";

import { useState } from "react";
import Link from "next/link";
import { CardRecipe } from "@/devlink/CardRecipe";
import type { Recipe } from "@/lib/recipes-api";

interface RecipeGridProps {
  recipes: Recipe[];
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const allTypes = Array.from(new Set(recipes.map((r) => r.type)));
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredRecipes = activeFilter
    ? recipes.filter((r) => r.type === activeFilter)
    : recipes;

  return (
    <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Filter pills */}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActiveFilter(null)}
          style={{
            padding: "8px 20px",
            borderRadius: 100,
            border: "2px solid",
            borderColor: !activeFilter
              ? "var(--brand-primary, var(--_color---primary-green))"
              : "transparent",
            background: !activeFilter
              ? "var(--brand-primary, var(--_color---primary-green))"
              : "var(--brand-surface, #fff)",
            color: !activeFilter
              ? "#fff"
              : "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            transition: "all 0.2s ease",
          }}
        >
          Alles
        </button>
        {allTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            style={{
              padding: "8px 20px",
              borderRadius: 100,
              border: "2px solid",
              borderColor:
                activeFilter === type
                  ? "var(--brand-primary, var(--_color---primary-green))"
                  : "transparent",
              background:
                activeFilter === type
                  ? "var(--brand-primary, var(--_color---primary-green))"
                  : "var(--brand-surface, #fff)",
              color:
                activeFilter === type
                  ? "#fff"
                  : "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              transition: "all 0.2s ease",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Recipe cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            style={{ textDecoration: "none", display: "flex" }}
          >
            <CardRecipe
              title={recipe.title}
              kcal={recipe.kcal}
              type={recipe.type}
              time={recipe.time}
              ingredients={recipe.ingredients}
              image={recipe.image}
            />
          </Link>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p
          style={{
            textAlign: "center",
            padding: 40,
            color: "var(--brand-text-secondary, #999)",
            fontSize: 16,
          }}
        >
          Geen recepten gevonden voor dit filter.
        </p>
      )}
    </section>
  );
}
