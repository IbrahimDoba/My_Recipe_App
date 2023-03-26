import "./LoadingSpinnerStyles.css";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`

const LoadingSpinner = () => {
  return (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
