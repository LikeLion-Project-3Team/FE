import styled from "@emotion/styled";
import CopywritingItem from "../components/StartPageItems/CopywritingItem";
import NavBar from "../components/NavBar";

function StartPage() {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <TextContainer>
          <TitleBox>
            Hi there, welcome to <BoldText>devbreak</BoldText>!
          </TitleBox>
          <ComentBox>
            <Line>Turn your GitHub repos into real-time, collaborative tech blogs</Line>
            <Line>—capture and share every development insight.</Line>
          </ComentBox>
        </TextContainer>
        <CopywritingItem></CopywritingItem>
      </Container>
    </>
  );
}

export default StartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.8vh 15vh;
  gap: 8vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

const TitleBox = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 2vw;
  line-height: 48px;
  color: white;
`;

const BoldText = styled.span`
  font-weight: 700;
  font-size: 2vw;
  font-family: "Pretendard"; // devbreak에 대한 font-weight 설정
`;

const ComentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  color: #ffffff;
`;
