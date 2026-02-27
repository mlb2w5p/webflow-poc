"use client";

import { useState } from "react";

interface IngredientChecklistProps {
  title?: string;
  ingredients?: string;
}

export const IngredientChecklist = ({
  title = "Ingredients",
  ingredients = "2 bananas\n200g yoghurt\n50g granola\n1 kiwi\n30g honey\n100g mixed berries",
}: IngredientChecklistProps) => {
  const items = ingredients
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const checkedCount = checked.size;
  const totalCount = items.length;

  return (
    <div
      style={{
        fontFamily: "Fredoka, sans-serif",
        padding: 24,
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        maxWidth: 360,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h3
          style={{
            fontSize: 20,
            fontWeight: 600,
            margin: 0,
            color: "#2f2f2f",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: checkedCount === totalCount ? "#00ac8e" : "#999",
            transition: "color 0.2s ease",
          }}
        >
          {checkedCount}/{totalCount}
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: 4,
          borderRadius: 4,
          background: "#eae8e3",
          marginBottom: 16,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${totalCount > 0 ? (checkedCount / totalCount) * 100 : 0}%`,
            background: "#00ac8e",
            borderRadius: 4,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Items */}
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {items.map((item, i) => {
          const isChecked = checked.has(i);
          return (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  padding: "10px 8px",
                  border: "none",
                  borderRadius: 8,
                  background: isChecked ? "rgba(0,172,142,0.06)" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: 15,
                  color: isChecked ? "#999" : "#2f2f2f",
                  textDecoration: isChecked ? "line-through" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Checkbox */}
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    border: isChecked
                      ? "2px solid #00ac8e"
                      : "2px solid #d2cdc0",
                    background: isChecked ? "#00ac8e" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.15s ease",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {isChecked ? "✓" : ""}
                </span>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
