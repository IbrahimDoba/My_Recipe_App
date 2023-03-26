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
import { RecipeData } from "../Services/Types";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

type NavbarProps = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setRecipes, setIsLoading }: NavbarProps) => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    setKeyword("");
    try {
      const response = await fetchData(keyword);
      const data = response.data;
      setRecipes(data.hits);
      setIsLoading(false);

      console.log("data obj", data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  function handleClick() {
    if (window.location.pathname !== "/") {
      history("/");
    }
  }
  const ResetClick = () => {
    setRecipes([]);
  };

  return (
    <Container>
      <Left>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          {" "}
          <Logo onClick={ResetClick}>SILVER.</Logo>
        </Link>
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
            <SubmitBtn type="submit" onClick={handleClick}>
              <SearchIcon />
            </SubmitBtn>
          </SubmitDiv>
        </InputCon>
      </Right>
    </Container>
  );
};

export default Navbar;
