"use client";

import { useBrand } from "@/themes/BrandProvider";

interface Finding {
  title: string;
  status: "✅" | "⚠️" | "❌";
  category: string;
  description: string;
  details: string[];
}

const findings: Finding[] = [
  {
    title: "DevLink is One-Way Only",
    status: "⚠️",
    category: "Architecture",
    description:
      "Components are only synced from Webflow Designer to code. Custom React components CANNOT be pushed back to Webflow.",
    details: [
      "The devlink/ folder is completely overwritten on every sync.",
      "Custom components must be created outside devlink/ (src/components/).",
      "This means: design in Webflow, enrich in code.",
      "Webflow Designer remains the 'single source of truth' for visual design.",
    ],
  },
  {
    title: "Multi-Brand Theming via CSS Custom Properties",
    status: "✅",
    category: "Multi-Brand",
    description:
      "Webflow's design tokens (CSS variables) can be overridden per brand via data attributes, so all DevLink components automatically inherit the correct brand style.",
    details: [
      "Webflow generates CSS variables like --_color---primary-green.",
      "We can override these per [data-brand] selector.",
      "DevLink components automatically inherit the correct colors.",
      "No changes needed to Webflow components.",
      "Works for colors, fonts, border-radius, and more.",
    ],
  },
  {
    title: "API Integration (Recipes)",
    status: "✅",
    category: "API Integration",
    description:
      "External API data can be fetched via Next.js (SSR/ISR/SSG) and rendered in Webflow-designed components like CardRecipe.",
    details: [
      "Mock API simulates an external recipe service.",
      "Data is fetched server-side (SSR) — SEO-friendly.",
      "DevLink CardRecipe component is reused with dynamic props.",
      "Filter functionality is added client-side.",
      "Dynamic detail pages via Next.js [slug] routing.",
      "Easy to replace with a real API (e.g. Contentful, Sanity, custom backend).",
    ],
  },
  {
    title: "Google Maps / External Embeds",
    status: "✅",
    category: "API Integration",
    description:
      "Google Maps and other external services can be used alongside DevLink components in Next.js pages.",
    details: [
      "Google Maps iframe embed works directly.",
      "For full Maps JS API, an API key is required.",
      "Custom React components (StoreLocator) work alongside DevLink components.",
      "Location data can come from a CMS or API.",
    ],
  },
  {
    title: "Webflow CMS vs Own Data",
    status: "⚠️",
    category: "Content",
    description:
      "Webflow CMS is limited in combination with DevLink. For dynamic content, a custom CMS/API is more flexible.",
    details: [
      "Webflow CMS collections are NOT synced via DevLink.",
      "CMS data must be fetched via Webflow's Data API (extra complexity).",
      "Alternative: use a headless CMS (Contentful, Sanity, Strapi).",
      "Webflow CMS is fine for static content.",
      "For dynamic/filtered content, a custom API is better.",
    ],
  },
  {
    title: "Content Editing Workflow",
    status: "✅",
    category: "Workflow",
    description:
      "Non-technical users can edit text and images in Webflow Designer. After sync, changes are automatically applied.",
    details: [
      "Designer changes → devlink sync → new defaults in components.",
      "Works well for 'template' content (default text, styling).",
      "Dynamic content (from API) is not managed in Webflow.",
      "Two content streams: Webflow (visual) + API (data).",
    ],
  },
  {
    title: "Deployment (Cloudflare / Vercel)",
    status: "✅",
    category: "Infrastructure",
    description:
      "The project runs on Cloudflare Workers via OpenNext. Vercel is also an option. DevLink components work in both environments.",
    details: [
      "Cloudflare Workers via @opennextjs/cloudflare.",
      "Edge rendering for fast load times.",
      "Static generation (SSG) possible for recipe pages.",
      "Vercel as an alternative deployment platform.",
    ],
  },
  {
    title: "Component Reuse Across Brands",
    status: "✅",
    category: "Multi-Brand",
    description:
      "The same DevLink components (Navbar, Footer, CardRecipe, Button) can be reused for multiple brands without duplication.",
    details: [
      "One set of Webflow components for all brands.",
      "Theming via CSS variables eliminates duplication.",
      "Brand-specific components can be added as custom React components.",
      "Monorepo structure is possible for multiple brand sites.",
    ],
  },
  {
    title: "Performance",
    status: "✅",
    category: "Infrastructure",
    description:
      "DevLink components are lightweight React components with CSS Modules. No extra runtime overhead.",
    details: [
      "CSS Modules provide scoped styling without runtime overhead.",
      "Components are tree-shakeable (import only what you need).",
      "Warning: do not import from index.js but directly from component files.",
      "Next.js Image component can be used for optimized images.",
    ],
  },
  {
    title: "DevLink Limitations",
    status: "❌",
    category: "Limitations",
    description:
      "Some limitations relevant for the multi-brand use case.",
    details: [
      "No bidirectional sync — code changes are lost on sync.",
      "Webflow Interactions are generated as JSON blobs (hard to modify).",
      "CMS collections not available via DevLink.",
      "No TypeScript generated types for component props (only .d.ts).",
      "devlink/ folder must be treated as 'read-only'.",
      "Webflow plan requires Enterprise or Workspace plan for DevLink.",
    ],
  },
];

const categories = Array.from(new Set(findings.map((f) => f.category)));

export default function PocPage() {
  const { brandName } = useBrand();

  const statusCounts = {
    "✅": findings.filter((f) => f.status === "✅").length,
    "⚠️": findings.filter((f) => f.status === "⚠️").length,
    "❌": findings.filter((f) => f.status === "❌").length,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      {/* Header */}
      <section
        style={{
          padding: "80px 24px 40px",
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 600,
            color:
              "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            marginBottom: 12,
          }}
        >
          POC Findings
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color:
              "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            maxWidth: 600,
            margin: "0 auto 32px",
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
          }}
        >
          Overview of what works, what needs attention, and what is not possible with Webflow DevLink + Next.js.
        </p>

        {/* Status summary */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: "✅",
              label: "Works",
              count: statusCounts["✅"],
              color: "#00ac8e",
            },
            {
              icon: "⚠️",
              label: "With caveats",
              count: statusCounts["⚠️"],
              color: "#fab041",
            },
            {
              icon: "❌",
              label: "Limitations",
              count: statusCounts["❌"],
              color: "#e25f59",
            },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "12px 24px",
                borderRadius: "var(--brand-radius-sm, 16px)",
                background: "var(--brand-surface, #fff)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: s.color }}>
                {s.count}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color:
                    "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Findings by category */}
      <section
        style={{
          padding: "0 24px 80px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {categories.map((category) => (
          <div key={category} style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
                fontSize: 20,
                fontWeight: 600,
                color:
                  "var(--brand-text-primary, var(--_color---semantic--text--primary))",
                marginBottom: 16,
                paddingBottom: 8,
                borderBottom:
                  "2px solid var(--_color---semantic--stroke--medium, #eae8e3)",
              }}
            >
              {category}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {findings
                .filter((f) => f.category === category)
                .map((finding) => (
                  <div
                    key={finding.title}
                    style={{
                      padding: 24,
                      borderRadius: "var(--brand-radius-sm, 16px)",
                      background: "var(--brand-surface, #fff)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                      border: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{finding.status}</span>
                      <h3
                        style={{
                          fontFamily:
                            "var(--brand-font-family, Fredoka, sans-serif)",
                          fontSize: 18,
                          fontWeight: 600,
                          margin: 0,
                          color:
                            "var(--brand-text-primary, var(--_color---semantic--text--primary))",
                        }}
                      >
                        {finding.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.6,
                        color:
                          "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                        margin: "0 0 12px",
                        fontFamily:
                          "var(--brand-font-family, Fredoka, sans-serif)",
                      }}
                    >
                      {finding.description}
                    </p>
                    <ul
                      style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {finding.details.map((detail, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            fontSize: 14,
                            lineHeight: 1.5,
                            color:
                              "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
                            fontFamily:
                              "var(--brand-font-family, Fredoka, sans-serif)",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background:
                                "var(--brand-primary, var(--_color---primary-green))",
                              flexShrink: 0,
                              marginTop: 7,
                            }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Recommendation */}
      <section
        style={{
          padding: "48px 24px",
          maxWidth: 1200,
          margin: "0 auto 80px",
          borderRadius: "var(--brand-radius-sm, 24px)",
          background:
            "var(--brand-primary-darker, var(--_color---semantic--background--brand-darker))",
          color: "#fff",
          fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            marginTop: 0,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          💡 Recommendation
        </h2>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            fontSize: 16,
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          <p>
            Webflow + DevLink is a strong choice as a <strong>design-to-code pipeline</strong>. Designers work in Webflow Designer, developers enrich with APIs, theming, and interaction in Next.js.
          </p>
          <p>
            For <strong>multi-brand</strong> the platform is suitable via CSS Custom Properties, but requires discipline: the devlink/ folder is read-only and all custom logic lives in src/components/.
          </p>
          <p style={{ opacity: 0.7, fontSize: 14 }}>
            Current brand: <strong>{brandName}</strong> — switch in the bottom right to see the theme system in action.
          </p>
        </div>
      </section>
    </div>
  );
}
