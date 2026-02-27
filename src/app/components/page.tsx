"use client";

import { RecipeCard } from "@/components/RecipeCard";
import { IngredientChecklist } from "@/components/IngredientChecklist";
import { recipes } from "@/lib/recipes-api";
import { useState } from "react";

const recipeOptions = recipes.map((r) => ({
  slug: r.slug,
  title: r.title,
}));

export default function ComponentsPage() {
  const [selectedSlug, setSelectedSlug] = useState("ontbijtbowl");

  const selectedRecipe = recipes.find((r) => r.slug === selectedSlug);

  // Build ingredients string from the selected recipe (one per line)
  const ingredientsText = selectedRecipe
    ? selectedRecipe.ingredients
        .split(",")
        .map((s) => s.trim())
        .join("\n")
    : "";

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 80px",
          fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
        }}
      >
        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              background: "rgba(0,172,142,0.08)",
              fontSize: 13,
              fontWeight: 500,
              color: "#00ac8e",
              marginBottom: 16,
            }}
          >
            🧩 Webflow Code Components
          </div>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              margin: "0 0 12px",
              color: "var(--_color---semantic--text--primary, #2f2f2f)",
            }}
          >
            Custom Components
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--_color---semantic--text--secondary, #666)",
              maxWidth: 680,
              margin: 0,
            }}
          >
            These components are registered as{" "}
            <strong>Webflow Code Components</strong> via{" "}
            <code
              style={{
                background: "#f0ede6",
                padding: "2px 8px",
                borderRadius: 6,
                fontSize: 14,
              }}
            >
              .webflow.tsx
            </code>{" "}
            declaration files. Designers can drag them into the Webflow Designer
            and configure props — while the logic runs in React.
          </p>
        </div>

        {/* Recipe selector */}
        <div
          style={{
            marginBottom: 40,
            padding: 20,
            borderRadius: 16,
            background: "#f9f8f5",
            border: "1px solid #eae8e3",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: 14,
              fontWeight: 600,
              color: "#666",
              marginBottom: 8,
            }}
          >
            Select a recipe to preview both components:
          </label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            style={{
              fontSize: 16,
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "#fff",
              fontFamily: "Fredoka, sans-serif",
              cursor: "pointer",
              minWidth: 260,
            }}
          >
            {recipeOptions.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.title}
              </option>
            ))}
          </select>
        </div>

        {/* Components grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* RecipeCard section */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  margin: "0 0 6px",
                  color: "var(--_color---semantic--text--primary, #2f2f2f)",
                }}
              >
                Recipe Card
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Fetches recipe data by slug and renders a visual card.
                Demonstrates how external API data can power Webflow-designed
                layouts.
              </p>
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "#e8f5e9",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#2e7d32",
                  }}
                >
                  props.Variant
                </span>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "#e3f2fd",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#1565c0",
                  }}
                >
                  Data-Driven
                </span>
              </div>
            </div>
            <RecipeCard recipeSlug={selectedSlug} />
          </div>

          {/* IngredientChecklist section */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  margin: "0 0 6px",
                  color: "var(--_color---semantic--text--primary, #2f2f2f)",
                }}
              >
                Ingredient Checklist
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Interactive checklist with progress bar. Users can check off
                items. Demonstrates stateful interactivity that Webflow Designer
                can&apos;t do natively.
              </p>
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "#fff3e0",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#e65100",
                  }}
                >
                  props.Text
                </span>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "#fce4ec",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#c62828",
                  }}
                >
                  Interactive
                </span>
              </div>
            </div>
            <IngredientChecklist
              title={selectedRecipe?.title ?? "Ingredients"}
              ingredients={ingredientsText}
            />
          </div>
        </div>

        {/* How it works section */}
        <div
          style={{
            marginTop: 64,
            padding: 32,
            borderRadius: 20,
            background: "linear-gradient(135deg, #f9f8f5 0%, #f0ede6 100%)",
            border: "1px solid #eae8e3",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              margin: "0 0 20px",
              color: "var(--_color---semantic--text--primary, #2f2f2f)",
            }}
          >
            How Webflow Code Components Work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
            }}
          >
            {[
              {
                step: "1",
                title: "Declare",
                description:
                  'Create a .webflow.tsx file that wraps your React component with declareComponent() and defines props using Webflow\'s props API (Text, Number, Variant, etc.).',
                icon: "📝",
              },
              {
                step: "2",
                title: "Design",
                description:
                  "The component appears in Webflow Designer's component panel. Designers can drag it onto the canvas and configure props via the settings panel.",
                icon: "🎨",
              },
              {
                step: "3",
                title: "Render",
                description:
                  "At runtime, the React component receives the configured props and renders with full interactivity — API calls, state, effects, and all.",
                icon: "⚡",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 10,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#00ac8e",
                    marginBottom: 4,
                  }}
                >
                  Step {item.step}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    margin: "0 0 6px",
                    color: "#2f2f2f",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    margin: 0,
                    color: "#888",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Limitation callout */}
          <div
            style={{
              marginTop: 20,
              padding: "14px 20px",
              borderRadius: 12,
              background: "#fff8e1",
              border: "1px solid #ffe082",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 18 }}>⚠️</span>
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#f57f17",
                  marginBottom: 2,
                }}
              >
                Limitation
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                  color: "#666",
                }}
              >
                Code components render in a sandboxed iframe in the Designer.
                They must <strong>not</strong> use Next.js router hooks (
                <code>usePathname</code>, <code>useRouter</code>) or
                app-specific React contexts — these will crash in the sandbox.
                Only <code>useState</code>, <code>useEffect</code>, and direct
                imports are safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
