"use client";

import { useEffect, useState } from "react";
import { recipes, type Recipe } from "@/lib/recipes-api";

interface RecipeCardProps {
  /** The recipe slug to load data for */
  recipeSlug?: string;
}

export const RecipeCard = ({
  recipeSlug = "ontbijtbowl",
}: RecipeCardProps) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Simulate fetching from an API by slug
    const found = recipes.find((r) => r.slug === recipeSlug);
    setRecipe(found ?? null);
  }, [recipeSlug]);

  if (!recipe) {
    return (
      <div
        style={{
          width: 340,
          height: 460,
          borderRadius: 24,
          background: "#f0ede6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Fredoka, sans-serif",
          color: "#999",
          fontSize: 14,
        }}
      >
        {recipeSlug ? `Recipe "${recipeSlug}" not found` : "Select a recipe"}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: 340,
        height: 460,
        borderRadius: 24,
        overflow: "hidden",
        fontFamily: "Fredoka, sans-serif",
        cursor: "pointer",
      }}
    >
      {/* Background image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Tags */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        {recipe.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 12px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.9)",
              fontSize: 12,
              fontWeight: 500,
              color: "#2f2f2f",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          color: "#fff",
        }}
      >
        <h3
          style={{
            fontSize: 24,
            fontWeight: 600,
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}
        >
          {recipe.title}
        </h3>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 10,
          }}
        >
          <span>🔥 {recipe.kcal}</span>
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.5)",
            }}
          />
          <span>⏱️ {recipe.time}</span>
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.5)",
            }}
          />
          <span>👥 {recipe.servings}p</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            margin: 0,
            color: "rgba(255,255,255,0.75)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {recipe.description}
        </p>
      </div>
    </div>
  );
};
