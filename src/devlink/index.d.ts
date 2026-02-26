"use client";

console.warn(
  "⚠️ Avoid importing components from 'index.js' for better performance. This practice is deprecated and may be removed in the future."
);

export * as _Builtin from "./_Builtin";
export * from "./CardComponent";
export * from "./CardRecipe";
export * from "./devlink";
export * from "./devlinkContext";
export * from "./DevLinkProvider";
export * from "./Footer";
export * from "./interactions";
export * from "./Navbar";
export * from "./utils";
