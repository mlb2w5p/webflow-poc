import { getRecipes } from "@/lib/recipes-api";
import { RecipeGrid } from "./RecipeGrid";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      {/* Hero section */}
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
            color: "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            marginBottom: 12,
            letterSpacing: "-0.5px",
          }}
        >
          Onze Recepten
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Ontdek heerlijke recepten voor elke gelegenheid — van snelle
          doordeweekse maaltijden tot uitgebreide weekendgerechten.
        </p>
      </section>

      {/* Recipe grid — client component for interactivity */}
      <RecipeGrid recipes={recipes} />
    </div>
  );
}
