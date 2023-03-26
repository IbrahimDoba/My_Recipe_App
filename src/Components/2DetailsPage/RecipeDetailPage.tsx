import {
  BottomDiv,
  CautionDiv,
  CautionText,
  Container,
  EachNutriDiv,
  IngBot,
  IngDiv,
  Ingredient,
  IngTop,
  LeftBotDiv,
  Nutri,
  NutriDiv,
  NutriDivOne,
  NutriSpan,
  NutriText,
  NutriTextDiv,
  RightBotDiv,
  RImg,
  RLabel,
  RLinkBtn,
  RLinkBtnDiv,
  RLinkTo,
  RMeal,
  TopDiv,
  TopLeftDiv,
  TopRightDiv,
  TotalNutrientsDiv,
  Wrapper,
} from "./RecipeDetailPageStyles";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailRecipes } from "../Services/Types";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Assets/LoadingSpinner";

const RecipeDetailPage: React.FC = () => {
  const [recipeDetails, setRecipeDetails] = useState<DetailRecipes | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const recipeId = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${recipeId.id}?type=public&app_id=37044d23&app_key=9e9e0cc40599f430d64128000249012d
        `
      )
      .then((response) => {
        setRecipeDetails(response.data.recipe);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, [recipeId]);

  const nutri = recipeDetails?.totalNutrients;

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Wrapper>
          <TopDiv>
            <TopLeftDiv>
              {recipeDetails && <RImg src={recipeDetails.image} />}
            </TopLeftDiv>
            <TopRightDiv>
              {recipeDetails && <RLabel> {recipeDetails.label}</RLabel>}
              {recipeDetails && (
                <RLinkTo>
                  see full recipe on:{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={recipeDetails.url}
                  >
                    {" "}
                    <RLinkBtn>{recipeDetails.source}</RLinkBtn>
                  </Link>
                </RLinkTo>
              )}
              {recipeDetails && (
                <RMeal>
                  Meal Type: <span> {recipeDetails.mealType} </span>
                </RMeal>
              )}
            </TopRightDiv>
          </TopDiv>
          <BottomDiv>
            <LeftBotDiv>
              <IngDiv>
                {recipeDetails && (
                  <IngTop>
                    {recipeDetails.ingredientLines.length} Ingerdients
                  </IngTop>
                )}
                {recipeDetails &&
                  recipeDetails.ingredientLines.map((ingre) => (
                    <Ingredient key={ingre}> {ingre}</Ingredient>
                  ))}

                <IngBot>Preparation</IngBot>
                {recipeDetails && (
                  <RLinkBtnDiv>
                    Instructions Here!{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={recipeDetails.url}
                    >
                      {" "}
                      <RLinkBtn>{recipeDetails.source}</RLinkBtn>{" "}
                    </Link>
                  </RLinkBtnDiv>
                )}
              </IngDiv>
            </LeftBotDiv>
            <RightBotDiv>
              <Nutri>Nutrition</Nutri>
              <NutriDiv>
                {recipeDetails && (
                  <NutriDivOne>
                    <span>{Math.round(recipeDetails.calories)}kcal</span>
                    <NutriSpan>Calores/Servings</NutriSpan>
                  </NutriDivOne>
                )}
                {recipeDetails && (
                  <NutriDivOne>
                    <span>{recipeDetails.cuisineType}</span>
                    <NutriSpan>Cuisine Type</NutriSpan>
                  </NutriDivOne>
                )}
                {recipeDetails && (
                  <NutriDivOne>
                    <span>
                      {recipeDetails.dietLabels.map((diet, index) => (
                        <React.Fragment key={diet}>
                          {diet}
                          {index !== diet.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                      {recipeDetails.dietLabels.length === 0 && (
                        <span>None</span>
                      )}{" "}
                    </span>
                    <NutriSpan>Diet Type</NutriSpan>
                  </NutriDivOne>
                )}
              </NutriDiv>
              {recipeDetails && (
                <NutriTextDiv>
                  {" "}
                  <p>Health Labels:</p>
                  <NutriText>
                    {recipeDetails.healthLabels.map((Hlabel, index) => (
                      <React.Fragment key={Hlabel}>
                        {Hlabel}
                        {index !== Hlabel.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </NutriText>
                </NutriTextDiv>
                // <span>{recipeDetails.healthLabels}</span>
              )}
              {recipeDetails && (
                <CautionDiv>
                  Cations:
                  <CautionText>
                    {" "}
                    {recipeDetails.cautions.map((caution, index) => (
                      <React.Fragment key={caution}>
                        {caution}
                        {index !== caution.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                    {recipeDetails.cautions.length === 0 && <span>None</span>}{" "}
                  </CautionText>
                </CautionDiv>
              )}

              {nutri && (
                <TotalNutrientsDiv>
                  <EachNutriDiv>
                    <span>{nutri.ENERC_KCAL.label}</span>
                    <p>
                      {Math.round(nutri.ENERC_KCAL.quantity)}
                      {nutri.ENERC_KCAL.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.PROCNT.label}</span>
                    <p>
                      {Math.round(nutri.PROCNT.quantity)}
                      {nutri.PROCNT.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.FAT.label}</span>
                    <p>
                      {Math.round(nutri.FAT.quantity)}
                      {nutri.FAT.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.FASAT.label}</span>
                    <p>
                      {Math.round(nutri.FASAT.quantity)}
                      {nutri.FASAT.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.CHOCDF.label}</span>
                    <p>
                      {Math.round(nutri.CHOCDF.quantity)}
                      {nutri.CHOCDF.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.FIBTG.label}</span>
                    <p>
                      {Math.round(nutri.FIBTG.quantity)}
                      {nutri.FIBTG.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.NA.label}</span>
                    <p>
                      {Math.round(nutri.NA.quantity)}
                      {nutri.NA.unit}
                    </p>
                  </EachNutriDiv>
                  <EachNutriDiv>
                    <span>{nutri.WATER.label}</span>
                    <p>
                      {Math.round(nutri.WATER.quantity)}
                      {nutri.WATER.unit}
                    </p>
                  </EachNutriDiv>
                </TotalNutrientsDiv>
              )}
            </RightBotDiv>
          </BottomDiv>
        </Wrapper>
      )}
    </Container>
  );
};

export default RecipeDetailPage;
