import styled from "styled-components"
import {BiCommentError} from "react-icons/bi"

const Container = styled.div`
    width:100%;
    height: 90vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`
const ErrText = styled.p`
    font-size: 26px;
    text-align: center;
    margin-left: 20px;
`
const ErrIcon = styled(BiCommentError)`
    font-size: 40px;
`


const NothingToDisplay = () => {
  return (
    <Container>
      <Wrapper>
        <ErrIcon/>
        <ErrText>Nothing To Dispaly Right Now!!</ErrText>
      </Wrapper>
    </Container>
  )
}

export default NothingToDisplay
