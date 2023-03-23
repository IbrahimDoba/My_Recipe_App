import {
  Container,
  InputCon,
  Left,
  Logo,
  Right,
  SearchCon,
  SearchIcon,
  SubmitBtn,
  SubmitDiv,
} from "./NavbarStyles";
import { useState } from "react";
import { fetchData } from "../Services/ApiConfig";
import RecipieSection from "../1DisplaySection/RecipeSection";
import { RecipeData } from "../Services/Types";

type NavbarProps = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};


const Navbar = ({ setRecipes,setIsLoading}: NavbarProps, ) => {
  const [keyword, setKeyword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault();
    setKeyword("");
    try {
      const response = await fetchData(keyword);
      const data = response.data;
      setRecipes(data.hits);
      console.log("data obj", data);
      setIsLoading(false)
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  return (
    <Container>
      <Left>
        <Logo>SILVER.</Logo>
      </Left>
      <Right>
        <InputCon onSubmit={handleSubmit}>
          <SearchCon
            type="text"
            id="keyword"
            value={keyword}
            placeholder="Type a Food Here!"
            onChange={(event) => setKeyword(event.target.value)}
          />
          <SubmitDiv>
            <SubmitBtn type="submit">
              <SearchIcon />
            </SubmitBtn>
          </SubmitDiv>
        </InputCon>
      </Right>
    </Container>
  );
};

export default Navbar;
