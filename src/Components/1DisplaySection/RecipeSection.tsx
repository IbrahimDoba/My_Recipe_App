import { Link } from "react-router-dom";
import {
  RCalories,
  RContainer,
  RecipieCard,
  RImg,
  RIngerdients,
  RLabel,
  RWrapper,
} from "./RecipeSectionStyles";
import { RecipeData } from "../Services/Types";
import LoadingSpinner from "../Assets/LoadingSpinner";
import ImageDisplay from "../Assets/ImageDisplay";

interface RecipeSectionProps {
  Recipes: RecipeData[];
  loading: boolean;
}

const RecipieSection = ({ Recipes, loading }: RecipeSectionProps) => {
  console.log(loading);
  if (!Recipes || Recipes.length === 0) {
    return <ImageDisplay />;
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <RContainer>
      <RWrapper>
        {Recipes.map((Recipe: RecipeData) => {
          const uri = Recipe.recipe.uri;
          const id = uri.substring(uri.lastIndexOf("_") + 1);
          const label = Recipe.recipe.label;
          // console.log(`Recipe ID : ${id}`);
          return (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/recipe/${id}`}
              id={id}
              key={id}
            >
              <RecipieCard>
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <RImg src={Recipe.recipe.image} />
                )}
                <RLabel>{label}</RLabel>
                <RIngerdients>
                  Ingredients: <p> {Recipe.recipe.ingredients.length} </p>
                </RIngerdients>
                <RCalories>
                  {" "}
                  Calories: <p> {Math.round(Recipe.recipe.calories)}</p>
                </RCalories>
              </RecipieCard>
            </Link>
          );
        })}
      </RWrapper>
    </RContainer>
  );
};

export default RecipieSection;

// <li key={Recipe.id}> {Recipe.label}</li>
