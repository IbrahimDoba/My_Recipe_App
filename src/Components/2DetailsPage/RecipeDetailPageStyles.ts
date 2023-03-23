import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, #D2FFD7); ;

`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  height: 100%;
  border: 3px solid white;
  margin-top: 20px;
  box-shadow: 1px 6px 6px 5px grey;
  padding: 20px 0 0px 0;
  margin-bottom: 20px;
`;
export const TopDiv = styled.div`
  flex: 1;
  border-bottom: 2px inset white;
  display: flex;
  padding-left: 18px;
  padding-bottom: 20px;
  box-shadow:0px 3px 0px 1px grey;
  background: linear-gradient(white, #e8e8e8); ;
  z-index: 10;
`;
export const TopLeftDiv = styled.div`
  display: flex;
  /* border: 2px solid red; */
  flex: 1;
`;

export const RImg = styled.img`
  width: 60%;
  height: auto;
`;
export const TopRightDiv = styled.div`
  flex: 1;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const RLabel = styled.h1`
  text-align: center;
`;
export const RLinkTo = styled.div`
  text-align: center;
`;
export const RLinkBtn = styled.button`
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px outset lightgrey;
  cursor: pointer;
  &:hover {
    border: 2px inset lightgrey;
    background-color: lightgreen;
  }
`;
export const RMeal = styled.p`
  text-align: center;
  span {
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const ShareLink = styled.div`
  text-align: center;
`;
export const ShareLinkBtn = styled.button``;
export const BottomDiv = styled.div`
  flex: 1;
  /* border: 2px solid black; */
  display: flex;
  background: linear-gradient(#e8e8e8, white);
`;
export const LeftBotDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid blue; */
  justify-content: top;
  flex: 1;
  padding: 20px;
`;
export const IngDiv = styled.div`
  display: flex;
  /* border: 2px solid green; */
  height: 50%;
  width: 100%;
  justify-content: top;
  flex-direction: column;
`;
export const IngTop = styled.h3`
  /* border-bottom: 2px solid yellow; */
  border-bottom: 2px solid lightgreen;
  padding-bottom: 5px;
`;
export const Ingredient = styled.p``;
export const RLinkBtnDiv = styled.div``;
export const IngBot = styled.h3`
  border-bottom: 2px solid lightgreen;
  padding-bottom: 5px;`;
export const RightBotDiv = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Nutri = styled.h3`
  text-align: center;
  border-bottom: 2px solid lightgreen;
  padding-bottom: 5px;
`;
export const NutriSpan = styled.p`
  font-size: 14px;
  font-weight: 600;
`
export const NutriDiv = styled.div`
  /* border: 2px solid brown; */
  display: flex;
  /* border-bottom: 2px solid red; */
  justify-content: top;
`;
export const NutriDivOne = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  span{
    font-size: 18px;
  }
`;
export const NutriTextDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 600;
  }
`;

export const NutriText = styled.div`
  display: flex;
  width: 70%;
  text-align: center;
`;
export const CautionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
export const CautionText = styled.p`
  padding-left: 10px;
  font-weight: normal;
`;
export const EachNutriDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  span {
    width: 50%;
  }
  p {
    width: 50%;
  }
`;
export const TotalNutrientsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
