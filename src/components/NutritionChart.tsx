"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { recipes } from "@/lib/recipes-api";

interface NutritionChartProps {
  recipeSlug: string;
  chartType: "bar" | "horizontal";
}

const BAR_COLORS = ["#00ac8e", "#fab041", "#e25f59", "#7857bc"];

export function NutritionChart({
  recipeSlug,
  chartType = "bar",
}: NutritionChartProps) {
  const recipe = recipes.find((r) => r.slug === recipeSlug);

  if (!recipe) {
    return (
      <div
        style={{
          padding: 24,
          borderRadius: 16,
          background: "#fff3cd",
          color: "#856404",
          fontFamily: "Fredoka, sans-serif",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Recipe not found: <strong>{recipeSlug}</strong>
      </div>
    );
  }

  const data = [
    { name: "Protein", value: recipe.nutrition.protein, unit: "g" },
    { name: "Carbs", value: recipe.nutrition.carbs, unit: "g" },
    { name: "Fat", value: recipe.nutrition.fat, unit: "g" },
    { name: "Fiber", value: recipe.nutrition.fiber, unit: "g" },
  ];

  const kcalNumber = parseInt(recipe.kcal, 10);

  return (
    <div
      style={{
        background: "var(--brand-surface, #fff)",
        borderRadius: 20,
        padding: 28,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        border: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
        fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
          gap: 12,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              margin: "0 0 4px",
              color: "var(--_color---semantic--text--primary, #2f2f2f)",
            }}
          >
            {recipe.title}
          </h3>
          <p
            style={{
              fontSize: 13,
              margin: 0,
              color: "var(--_color---semantic--text--secondary, #888)",
            }}
          >
            Nutritional values per serving
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "8px 16px",
            borderRadius: 12,
            background: "rgba(0,172,142,0.08)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--brand-primary, #00ac8e)",
              lineHeight: 1,
            }}
          >
            {isNaN(kcalNumber) ? recipe.kcal : kcalNumber}
          </div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>kcal</div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={chartType === "horizontal" ? 160 : 200}>
        {chartType === "horizontal" ? (
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 20, bottom: 0, left: 52 }}
          >
            <XAxis type="number" tick={{ fontSize: 12, fill: "#aaa" }} unit="g" />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 13, fill: "#555" }}
              width={50}
            />
            <Tooltip
              formatter={(value) => [`${value}g`, ""]}
              contentStyle={{
                borderRadius: 10,
                border: "1px solid #eee",
                fontSize: 13,
                fontFamily: "Fredoka, sans-serif",
              }}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -10 }}>
            <XAxis dataKey="name" tick={{ fontSize: 13, fill: "#555" }} />
            <YAxis tick={{ fontSize: 12, fill: "#aaa" }} unit="g" />
            <Tooltip
              formatter={(value) => [`${value}g`, ""]}
              contentStyle={{
                borderRadius: 10,
                border: "1px solid #eee",
                fontSize: 13,
                fontFamily: "Fredoka, sans-serif",
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>

      {/* Legend pills */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginTop: 16,
          justifyContent: "center",
        }}
      >
        {data.map((item, i) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 100,
              background: BAR_COLORS[i % BAR_COLORS.length] + "18",
              fontSize: 12,
              fontWeight: 500,
              color: BAR_COLORS[i % BAR_COLORS.length],
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: BAR_COLORS[i % BAR_COLORS.length],
                flexShrink: 0,
              }}
            />
            {item.name}: {item.value}g
          </div>
        ))}
      </div>
    </div>
  );
}
