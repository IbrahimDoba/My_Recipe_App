import { useState } from "react";
import Navbar from "./0Navbar/Navbar";
import RecipieSection from "./1DisplaySection/RecipeSection";
import RecipeDetailPage from "./2DetailsPage/RecipeDetailPage";
import { RecipeData } from "./Services/Types";

const Homepage = () => {
  const [Recipes, setRecipes] = useState<RecipeData[]>([]);
  const [loading, setIsLoading] = useState(false)

  return (
    <>
      <Navbar setRecipes={setRecipes} setIsLoading={setIsLoading} />
      <RecipieSection Recipes={Recipes} loading={loading} />
    </>
  );
};

export default Homepage;
