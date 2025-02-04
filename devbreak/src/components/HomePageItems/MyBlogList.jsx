import styled from "@emotion/styled";
import { BsStar } from "react-icons/bs"; // BsStar 아이콘 import
import { useState } from "react"; // 상태 관리를 위해 useState import

const MyBlogList = (onClick) => {
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  return (
    <DashBoard
      onMouseEnter={() => setIsHovered(true)} // hover 시작
      onMouseLeave={() => setIsHovered(false)} // hover 종료
    >
      <Title>
        <Line>
          <BoldText>Blog</BoldText> list
        </Line>
        <Line>
          what you <BoldText>followed</BoldText>
        </Line>
      </Title>
      <IconContainer>
        <BsStar size="5vw" color={isHovered ? "#FFEC4C" : "#ffffff"} /> {/* hover 시 아이콘 색상 변경 */}
      </IconContainer>
    </DashBoard>
  );
};

export default MyBlogList;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  font-family: "Pretendard";
  display: flex;
  flex-direction: row;
  gap: 1vh;
  font-weight: 400; /* 일반 글씨 */
  font-size: 3.5vh; /* 제목 크기 */
  text-align: left;
  margin: 0;
`;

const BoldText = styled.span`
  font-weight: 700;
  font-size: 3.5vh;
  font-family: "Pretendard"; /* 폰트 설정 */
`;

const DashBoard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 6vh 5vh;
  align-items: center;
  justify-content: space-between;
  width: 33vw;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 4vh;
  color: white;
  &:hover {
    color: #02f798;
    border: 1px solid #02f798;
    box-shadow: 0px 0px 15px rgba(2, 247, 152, 0.25);
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    width: 80vw; /* 화면 크기가 768px 이하일 때 80%로 크기 변경 */
    padding: 4vh 3vh; /* 패딩 크기 조정 */
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: end;
`;
