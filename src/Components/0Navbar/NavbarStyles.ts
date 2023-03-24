import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

// @media only screen and (max-width: 767px) {
/* CSS styles for mobile devices with a maximum width of 767px */
// }

export const Container = styled.div`
  display: flex;
  background-color: lightgreen;
  justify-content: center;
  height: 70px;
`;
export const Left = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const Logo = styled.h1`
  @media only screen and (max-width: 767px) {
    font-size: 20px;
  }
`;
export const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-start;
`;
export const InputCon = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const SearchCon = styled.input`
  width: 70%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 14px;
  outline: none;
  border: 1px solid grey;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 16px;
  @media only screen and (max-width: 767px) {
    width: 40%;
    font-size: 11px;
  }
`;
export const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  @media only screen and (max-width: 767px) {
    width: 20%;
    font-size: 11px;
  }
`;
export const SubmitBtn = styled.button`
  height: auto;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid grey;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
`;
