import { IconButton } from "./IconButton";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(IconButton, {
  name: "Icon Button",
  description:
    "A button with a Lucide React icon — an external npm icon library with 1500+ icons. Designers choose the label, icon, variant, and icon position via dropdowns. Demonstrates that external npm packages (lucide-react) work seamlessly as Webflow Code Components.",
  group: "Interactive",
  props: {
    label: props.Text({
      name: "Label",
      defaultValue: "Add to cart",
    }),
    icon: props.Variant({
      name: "Icon",
      options: [
        "shopping-cart",
        "heart",
        "star",
        "chevron-right",
        "clock",
        "flame",
        "leaf",
        "search",
        "share",
        "bookmark",
        "arrow-right",
        "download",
        "plus",
        "check",
        "info",
      ],
      defaultValue: "shopping-cart",
    }),
    variant: props.Variant({
      name: "Variant",
      options: ["primary", "secondary", "ghost"],
      defaultValue: "primary",
    }),
    iconPosition: props.Variant({
      name: "Icon position",
      options: ["left", "right"],
      defaultValue: "right",
    }),
  },
});
