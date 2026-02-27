"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBrand } from "@/themes/BrandProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/winkels", label: "Stores" },
  { href: "/poc", label: "POC Findings" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const { brandName } = useBrand();

  // Strip basePath for matching
  const currentPath = pathname.replace(/^\/app/, "") || "/";

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        height: 64,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom:
          "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
        fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
      }}
    >
      {/* Logo / Brand name */}
      <Link
        href="/"
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "var(--brand-primary, var(--_color---primary-green))",
          textDecoration: "none",
          letterSpacing: "-0.3px",
        }}
      >
        {brandName}
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 4 }}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? currentPath === "/"
              : currentPath.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: isActive ? 600 : 400,
                color: isActive
                  ? "var(--brand-primary, var(--_color---primary-green))"
                  : "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                background: isActive
                  ? "var(--brand-primary, var(--_color---primary-green))15"
                  : "transparent",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
