"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type BrandId = "boni" | "freshmart" | "natuurwinkel";

interface BrandContextValue {
  brand: BrandId;
  setBrand: (brand: BrandId) => void;
  brandName: string;
}

const brandNames: Record<BrandId, string> = {
  boni: "Boni",
  freshmart: "FreshMart",
  natuurwinkel: "Natuurwinkel",
};

const BrandContext = createContext<BrandContextValue>({
  brand: "boni",
  setBrand: () => {},
  brandName: "Boni",
});

export function BrandProvider({
  children,
  defaultBrand = "boni",
}: {
  children: ReactNode;
  defaultBrand?: BrandId;
}) {
  const [brand, setBrand] = useState<BrandId>(defaultBrand);

  return (
    <BrandContext.Provider
      value={{ brand, setBrand, brandName: brandNames[brand] }}
    >
      <div data-brand={brand} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}
