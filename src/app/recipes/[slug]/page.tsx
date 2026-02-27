import { getRecipeBySlug, getRecipeSlugs } from "@/lib/recipes-api";
import { notFound } from "next/navigation";
import { RecipeDetailClient } from "./RecipeDetailClient";

export async function generateStaticParams() {
  return getRecipeSlugs().map((slug) => ({ slug }));
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetailClient recipe={recipe} />;
}
