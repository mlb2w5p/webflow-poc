export interface Recipe {
  slug: string;
  title: string;
  kcal: string;
  type: string;
  time: string;
  ingredients: string;
  image: string;
  description: string;
  servings: number;
  difficulty: "Makkelijk" | "Gemiddeld" | "Moeilijk";
  steps: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    slug: "ontbijtbowl",
    title: "Ontbijtbowl",
    kcal: "386 kcal",
    type: "Ontbijt",
    time: "10 min",
    ingredients:
      "Met Boni ontbijt topper rode vruchtenmix, Boni bananen, Boni kiwi groen, Boni zachte dadels, Boni Granola honing",
    image:
      "https://cdn.prod.website-files.com/699d5f91cd9fb7e364b4131f/699dd22e4ac66fafb5be568a_Ontbijtbowl.avif",
    description:
      "Start je dag goed met deze kleurrijke ontbijtbowl vol verse vruchten, knapperige granola en zachte dadels. Gezond, snel en heerlijk!",
    servings: 2,
    difficulty: "Makkelijk",
    steps: [
      "Snijd de banaan en kiwi in plakjes.",
      "Verdeel de yoghurt over twee kommen.",
      "Voeg de rode vruchtenmix, banaan en kiwi toe.",
      "Snipper de dadels en strooi ze erover.",
      "Top af met granola en serveer direct.",
    ],
    tags: ["Ontbijt", "Gezond", "Snel klaar"],
  },
  {
    slug: "pasta-pesto-kip",
    title: "Pasta Pesto met Kip",
    kcal: "520 kcal",
    type: "Diner",
    time: "25 min",
    ingredients:
      "Boni penne, Boni groene pesto, kipfilet, cherrytomaten, Parmezaanse kaas, rucola",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    description:
      "Een snelle doordeweekse pasta met romige pesto, malse kip en frisse cherrytomaten. In 25 minuten op tafel!",
    servings: 4,
    difficulty: "Makkelijk",
    steps: [
      "Kook de penne volgens de verpakking.",
      "Snijd de kipfilet in blokjes en bak ze goudbruin.",
      "Halveer de cherrytomaten en bak ze 2 minuten mee.",
      "Meng de pasta met de pesto en de kip.",
      "Serveer met rucola en Parmezaanse kaas.",
    ],
    tags: ["Diner", "Pasta", "Snel klaar"],
  },
  {
    slug: "tomatensoep",
    title: "Romige Tomatensoep",
    kcal: "245 kcal",
    type: "Lunch",
    time: "30 min",
    ingredients:
      "Boni tomaten gepeld, ui, knoflook, bouillonblokje, room, basilicum, Boni brood",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
    description:
      "Klassieke romige tomatensoep met verse basilicum. Comfort food op z'n best, perfect voor koude dagen.",
    servings: 4,
    difficulty: "Makkelijk",
    steps: [
      "Fruit de ui en knoflook in olijfolie.",
      "Voeg de gepelde tomaten en bouillon toe.",
      "Laat 20 minuten zachtjes koken.",
      "Pureer de soep en roer de room erdoor.",
      "Serveer met verse basilicum en brood.",
    ],
    tags: ["Lunch", "Soep", "Comfort food"],
  },
  {
    slug: "griekse-salade",
    title: "Griekse Salade",
    kcal: "310 kcal",
    type: "Lunch",
    time: "15 min",
    ingredients:
      "Komkommer, cherrytomaten, rode ui, Boni feta, Kalamata olijven, oregano, olijfolie",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop",
    description:
      "Frisse en voedzame Griekse salade met romige feta, knapperige komkommer en zoete tomaten. Ideaal als lunch of bijgerecht.",
    servings: 2,
    difficulty: "Makkelijk",
    steps: [
      "Snijd de komkommer, tomaten en rode ui in stukken.",
      "Verdeel over een grote schaal.",
      "Verkruimel de feta erover.",
      "Voeg olijven toe en bestrooi met oregano.",
      "Besprenkel met olijfolie en serveer.",
    ],
    tags: ["Lunch", "Salade", "Vegetarisch"],
  },
  {
    slug: "banana-pancakes",
    title: "Banana Pancakes",
    kcal: "420 kcal",
    type: "Ontbijt",
    time: "20 min",
    ingredients:
      "Boni bananen, eieren, havermout, bakpoeder, kaneel, Boni ahornsiroop, bosbessen",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
    description:
      "Fluffy pancakes gemaakt van banaan en havermout. Gezonder dan gewone pannenkoeken en minstens zo lekker!",
    servings: 2,
    difficulty: "Makkelijk",
    steps: [
      "Pureer de bananen met de eieren.",
      "Meng de havermout, bakpoeder en kaneel erdoor.",
      "Bak kleine pannenkoekjes in een koekenpan.",
      "Keer om als de bovenkant bubbelt.",
      "Serveer met ahornsiroop en verse bosbessen.",
    ],
    tags: ["Ontbijt", "Gezond", "Vegetarisch"],
  },
  {
    slug: "kipkerrie-rijst",
    title: "Kipkerrie met Rijst",
    kcal: "580 kcal",
    type: "Diner",
    time: "35 min",
    ingredients:
      "Kipfilet, Boni kokosmelk, kerriepoeder, ui, paprika, Boni basmatirijst, koriander",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop",
    description:
      "Aromatische kipkerrie in romige kokossaus, geserveerd met fluffy basmatirijst. Een favoriet voor het hele gezin!",
    servings: 4,
    difficulty: "Gemiddeld",
    steps: [
      "Kook de rijst volgens de verpakking.",
      "Bak de kip goudbruin en haal uit de pan.",
      "Fruit de ui en paprika, voeg kerriepoeder toe.",
      "Giet de kokosmelk erbij en laat 10 minuten pruttelen.",
      "Voeg de kip terug en serveer met rijst en koriander.",
    ],
    tags: ["Diner", "Aziatisch", "Comfort food"],
  },
];

// Simulate API call
export async function getRecipes(): Promise<Recipe[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return recipes;
}

export async function getRecipeBySlug(
  slug: string
): Promise<Recipe | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return recipes.find((r) => r.slug === slug);
}

export function getRecipeSlugs(): string[] {
  return recipes.map((r) => r.slug);
}
