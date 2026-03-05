"use client";

import { RecipeCard } from "@/components/RecipeCard";
import { IngredientChecklist } from "@/components/IngredientChecklist";
import dynamic from "next/dynamic";
import { IconButton } from "@/components/IconButton";

const NutritionChart = dynamic(
  () => import("@/components/NutritionChart").then((m) => m.NutritionChart),
  { ssr: false, loading: () => <div style={{ height: 280, borderRadius: 20, background: "#f9f8f5", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa", fontSize: 14 }}>Loading chart…</div> }
);
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
        .join("; ")
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

        {/* Divider */}
        <div
          style={{
            margin: "56px 0 0",
            borderTop: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
          }}
        />

        {/* Section header: External libraries */}
        <div style={{ margin: "48px 0 32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              background: "rgba(120,87,188,0.08)",
              fontSize: 13,
              fontWeight: 500,
              color: "#7857bc",
              marginBottom: 16,
            }}
          >
            📦 External npm Libraries
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              margin: "0 0 10px",
              color: "var(--_color---semantic--text--primary, #2f2f2f)",
            }}
          >
            Any npm package can be a Code Component
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--_color---semantic--text--secondary, #666)",
              maxWidth: 680,
              margin: 0,
            }}
          >
            The components below wrap <strong>lucide-react</strong> (icons) and{" "}
            <strong>recharts</strong> (charts) — two popular npm packages.
            Designers configure them entirely through the Webflow Designer&apos;s
            settings panel. No chart or icon library exists natively in Webflow.
          </p>
        </div>

        {/* External library components grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* IconButton section */}
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
                Icon Button
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  margin: "0 0 10px",
                  lineHeight: 1.5,
                }}
              >
                Wraps <strong>lucide-react</strong> — 1500+ icons as a React
                library. Designers pick label, icon, variant, and position from
                dropdowns. Zero native Webflow icon-in-button capability.
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[
                  { label: "lucide-react", bg: "#f3e5f5", color: "#7b1fa2" },
                  { label: "props.Variant", bg: "#e8f5e9", color: "#2e7d32" },
                  { label: "Interactive", bg: "#fce4ec", color: "#c62828" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: tag.bg,
                      fontSize: 11,
                      fontWeight: 500,
                      color: tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            {/* Live preview: all variants */}
            <div
              style={{
                padding: 28,
                borderRadius: 20,
                background: "var(--brand-surface, #fff)",
                border: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 4px", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>Live preview</p>
              <IconButton label="Add to cart" icon="shopping-cart" variant="primary" iconPosition="right" />
              <IconButton label="Save recipe" icon="bookmark" variant="secondary" iconPosition="left" />
              <IconButton label="Share" icon="share" variant="ghost" iconPosition="right" />
            </div>
          </div>

          {/* NutritionChart section */}
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
                Nutrition Chart
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  margin: "0 0 10px",
                  lineHeight: 1.5,
                }}
              >
                Wraps <strong>recharts</strong> — a full React charting library.
                Renders a bar chart of protein/carbs/fat/fiber for the selected
                recipe. Webflow has zero native chart capability.
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[
                  { label: "recharts", bg: "#e3f2fd", color: "#1565c0" },
                  { label: "props.Variant", bg: "#e8f5e9", color: "#2e7d32" },
                  { label: "Data-Driven", bg: "#e3f2fd", color: "#1565c0" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: tag.bg,
                      fontSize: 11,
                      fontWeight: 500,
                      color: tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <NutritionChart recipeSlug={selectedSlug} chartType="bar" />
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
