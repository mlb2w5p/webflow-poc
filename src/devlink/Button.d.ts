import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  image?: Types.Asset.Image;
  text?: React.ReactNode;
  imagePosition?: "left" | "right";
}): React.JSX.Element;
