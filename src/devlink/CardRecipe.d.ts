import * as React from "react";
import * as Types from "./types";

declare function CardRecipe(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  kcal?: React.ReactNode;
  type?: React.ReactNode;
  time?: React.ReactNode;
  ingredients?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
