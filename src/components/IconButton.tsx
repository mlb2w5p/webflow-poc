"use client";

import {
  ShoppingCart,
  Heart,
  Star,
  ChevronRight,
  Clock,
  Flame,
  Leaf,
  Search,
  Share2,
  Bookmark,
  ArrowRight,
  Download,
  Plus,
  Check,
  Info,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "shopping-cart": ShoppingCart,
  heart: Heart,
  star: Star,
  "chevron-right": ChevronRight,
  clock: Clock,
  flame: Flame,
  leaf: Leaf,
  search: Search,
  share: Share2,
  bookmark: Bookmark,
  "arrow-right": ArrowRight,
  download: Download,
  plus: Plus,
  check: Check,
  info: Info,
};

type IconName = keyof typeof ICONS;
type ButtonVariant = "primary" | "secondary" | "ghost";
type IconPosition = "left" | "right";

interface IconButtonProps {
  label: string;
  icon: IconName;
  variant: ButtonVariant;
  iconPosition: IconPosition;
}

const VARIANT_STYLES: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--brand-primary, var(--_color---primary-green, #00ac8e))",
    color: "#fff",
    border: "2px solid transparent",
  },
  secondary: {
    background: "transparent",
    color: "var(--brand-primary, var(--_color---primary-green, #00ac8e))",
    border: "2px solid var(--brand-primary, var(--_color---primary-green, #00ac8e))",
  },
  ghost: {
    background: "rgba(0,172,142,0.08)",
    color: "var(--brand-primary, var(--_color---primary-green, #00ac8e))",
    border: "2px solid transparent",
  },
};

export function IconButton({
  label = "Click me",
  icon = "arrow-right",
  variant = "primary",
  iconPosition = "right",
}: IconButtonProps) {
  const LucideIcon = ICONS[icon] ?? ArrowRight;

  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 24px",
        borderRadius: "var(--brand-radius-sm, 12px)",
        fontSize: 15,
        fontWeight: 600,
        fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        flexDirection: iconPosition === "right" ? "row" : "row-reverse",
        ...VARIANT_STYLES[variant],
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,172,142,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {label}
      <LucideIcon size={18} strokeWidth={2.5} />
    </button>
  );
}
