import * as React from "react";
import * as Types from "./types";

declare function CardComponent(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;

export { CardComponent };
