import { RecipeCard } from "./RecipeCard";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(RecipeCard, {
  name: "Recipe Card",
  description:
    "Displays a recipe card with data fetched from an API by slug. Select a recipe from the dropdown to see it render with live data (image, title, kcal, time, tags). Demonstrates how external API data can power Webflow-designed layouts.",
  group: "Data-Driven",
  props: {
    recipeSlug: props.Variant({
      name: "Recipe",
      options: [
        "ontbijtbowl",
        "pasta-pesto-kip",
        "tomatensoep",
        "griekse-salade",
        "banana-pancakes",
        "kipkerrie-rijst",
      ],
      defaultValue: "ontbijtbowl",
    }),
  },
});
