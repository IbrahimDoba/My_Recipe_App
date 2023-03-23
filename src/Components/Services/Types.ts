export type RecipeData = {
  recipe: {
    uri: string;
    label: string;
    Source: string;
    image: string;
    calories: number;
    ingredients: ingredients[];
  };
};

type ingredients = {
  text: string;
  quantity: number;
  measure: string;
};

export type DetailRecipes = {
  image: string;
  label: string;
  source: string;
  mealType: string;
  ingredientLines: string[];
  calories: number;
  cuisineType: string;
  dietLabels: string;
  healthLabels: string[];
  cautions: string;
  url: string;
  totalNutrients: {
    ENERC_KCAL: totalNutrients; // Energy
    CHOCDF: totalNutrients; // Carbohydrate
    FAT: totalNutrients;    // Fat
    FASAT: totalNutrients;    // Saturated Fat
    PROCNT: totalNutrients; // Protein
    FIBTG: totalNutrients; // Fibers
    NA: totalNutrients; // Sodium
    WATER: totalNutrients; // Water
  };
};


// water

type totalNutrients = {
  label: string;
  quantity: number;
  unit: string;
};

// type Values = {

// };

// CA: Values[];
// CHOCDF: Values[];
// CHOLE: Values[];
// FAMS: Values[];
