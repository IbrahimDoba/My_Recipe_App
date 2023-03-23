import styled from "styled-components";

export const RContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RWrapper = styled.div`
  width: 80%;
  /* border: 2px solid red; */
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`;
export const RIngerdients = styled.h3`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0%;
  opacity: 0;
  p{
    color: green;
  }
`;
export const RCalories = styled.h3`
  text-align: center;
  position: absolute;
  width: 100%;
  height: 40%;
  top: 0%;
  opacity: 0;
  p{
    color: green;
  }
`;
export const RImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  align-self: center;
`;
export const RLabel = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: green;
`;

export const RecipieCard = styled.div`
  width: 250px;
  height: 260px;
  border: 2px solid lightgreen;
  margin: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  opacity: 1;
  background-color: white;
  background: linear-gradient(white, #f1f1f1);

  &:hover {
  }
  &:hover ${RImg} {
    opacity: 0.3;
  }
  &:hover ${RLabel} {
    opacity: 0.3;
  }

  &:hover ${RIngerdients} {
    bottom: 40%;
    opacity: 1;
    transition: 0.5s all ease-in-out;
  }

  &:hover ${RCalories} {
    top: 40%;
    opacity: 1;
    transition: 0.5s all ease-in-out;
  }
`;
