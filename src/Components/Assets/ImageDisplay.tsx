import styled from "styled-components";
import Recipeimg from "../Images/Homeimg.jpg";

const Container = styled.div`
  width: 100%;
  height: 92vh;
  background-color: #ebedf1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;
const Img = styled.img`
  width: 600px;
  object-fit: contain;
  overflow-y: hidden;
`;

const ImageDisplay = () => {
  return (
    <Container>
      <Img src={Recipeimg} />
    </Container>
  );
};

export default ImageDisplay;
