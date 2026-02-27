import { StoreLocator } from "@/components/StoreLocator";

export default function WinkelsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "var(--brand-background, var(--_color---semantic--background--primary, #f9f6f0))",
      }}
    >
      {/* Page header */}
      <section
        style={{
          padding: "80px 24px 32px",
          textAlign: "center",
          maxWidth: 800,
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
            letterSpacing: "-0.5px",
          }}
        >
          Vind een Winkel
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color:
              "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Vind de dichtstbijzijnde winkel bij jou in de buurt.
        </p>
      </section>

      {/* Store locator with Google Maps */}
      <StoreLocator />
    </div>
  );
}
