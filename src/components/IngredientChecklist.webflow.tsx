import { IngredientChecklist } from "./IngredientChecklist";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(IngredientChecklist, {
  name: "Ingredient Checklist",
  description:
    "An interactive ingredient checklist with progress tracking. Users can check off items as they go. Enter one ingredient per line. Demonstrates stateful interactivity not possible in native Webflow.",
  group: "Interactive",
  props: {
    title: props.Text({
      name: "Title",
      defaultValue: "Ingredients",
    }),
    ingredients: props.Text({
      name: "Ingredients (one per line)",
      defaultValue:
        "2 bananas\n200g yoghurt\n50g granola\n1 kiwi\n30g honey\n100g mixed berries",
    }),
  },
});
