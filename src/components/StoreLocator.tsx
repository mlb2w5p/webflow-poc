"use client";

import { useState } from "react";

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  {
    id: "1",
    name: "Colruyt Halle",
    address: "Edingensesteenweg 196",
    city: "1500 Halle",
    hours: "Ma-Za: 8:00-20:00, Zo: gesloten",
    lat: 50.7351,
    lng: 4.2376,
  },
  {
    id: "2",
    name: "Colruyt Buizingen",
    address: "Bergensesteenweg 700",
    city: "1501 Buizingen",
    hours: "Ma-Za: 8:00-20:00, Zo: gesloten",
    lat: 50.7342,
    lng: 4.2467,
  },
  {
    id: "3",
    name: "Colruyt Sint-Pieters-Leeuw",
    address: "Bergensesteenweg 720",
    city: "1600 Sint-Pieters-Leeuw",
    hours: "Ma-Za: 8:00-20:00, Zo: gesloten",
    lat: 50.7832,
    lng: 4.2436,
  },
  {
    id: "4",
    name: "Colruyt Lot",
    address: "Bergensesteenweg 1030",
    city: "1651 Lot",
    hours: "Ma-Za: 8:00-20:00, Zo: gesloten",
    lat: 50.7652,
    lng: 4.2871,
  },
];

export function StoreLocator() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );

  const mapSrc = `https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=15&output=embed`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "380px 1fr",
        gap: 0,
        height: "calc(100vh - 80px)",
        overflow: "hidden",
      }}
    >
      {/* Store list sidebar */}
      <div
        style={{
          overflowY: "auto",
          background: "var(--brand-surface, #fff)",
          borderRight: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
        }}
      >
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
              fontSize: 22,
              fontWeight: 600,
              margin: 0,
              color:
                "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            }}
          >
            Onze Winkels
          </h2>
          <p
            style={{
              fontSize: 14,
              color:
                "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
              margin: "8px 0 0",
            }}
          >
            {locations.length} locaties gevonden
          </p>
        </div>

        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocation(location)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "20px",
              border: "none",
              borderBottom:
                "1px solid var(--_color---semantic--stroke--medium, #eae8e3)",
              background:
                selectedLocation.id === location.id
                  ? "var(--brand-primary, var(--_color---primary-green))"
                  : "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
            }}
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                margin: "0 0 6px",
                color:
                  selectedLocation.id === location.id
                    ? "#fff"
                    : "var(--brand-text-primary, var(--_color---semantic--text--primary))",
              }}
            >
              {location.name}
            </h3>
            <p
              style={{
                fontSize: 14,
                margin: "0 0 4px",
                color:
                  selectedLocation.id === location.id
                    ? "rgba(255,255,255,0.85)"
                    : "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
              }}
            >
              📍 {location.address}, {location.city}
            </p>
            <p
              style={{
                fontSize: 13,
                margin: 0,
                color:
                  selectedLocation.id === location.id
                    ? "rgba(255,255,255,0.7)"
                    : "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
              }}
            >
              🕐 {location.hours}
            </p>
          </button>
        ))}
      </div>

      {/* Map embed */}
      <div style={{ position: "relative" }}>
        <iframe
          title={`Kaart: ${selectedLocation.name}`}
          src={mapSrc}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* Floating card on map */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            right: 24,
            maxWidth: 400,
            padding: 20,
            borderRadius: "var(--brand-radius-sm, 16px)",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            fontFamily: "var(--brand-font-family, Fredoka, sans-serif)",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              margin: "0 0 8px",
              color:
                "var(--brand-text-primary, var(--_color---semantic--text--primary))",
            }}
          >
            {selectedLocation.name}
          </h3>
          <p
            style={{
              fontSize: 14,
              color:
                "var(--brand-text-secondary, var(--_color---semantic--text--secondary))",
              margin: 0,
            }}
          >
            {selectedLocation.address}, {selectedLocation.city}
          </p>
        </div>
      </div>
    </div>
  );
}
