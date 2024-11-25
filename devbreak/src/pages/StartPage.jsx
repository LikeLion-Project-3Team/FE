import styled from "@emotion/styled";
import CopywritingItem from "../components/StartPageItems/CopywritingItem";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";

function StartPage() {
  // // 로컬 스토리지에서 로그인 상태를 가져옵니다.
  // const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'; // 'true' 문자열로 저장되어 있을 가능성 있음.

  const { isLoggedIn } = useAuth(); 

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
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
