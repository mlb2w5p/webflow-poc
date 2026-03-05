import { NutritionChart } from "./NutritionChart";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(NutritionChart, {
  name: "Nutrition Chart",
  description:
    "Displays a nutrition bar chart (protein, carbs, fat, fiber) for a selected recipe using Recharts — an external React charting library. Demonstrates that any npm package can be wrapped as a Webflow Code Component. Webflow has no native chart capability.",
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
    chartType: props.Variant({
      name: "Chart orientation",
      options: ["bar", "horizontal"],
      defaultValue: "bar",
    }),
  },
});
