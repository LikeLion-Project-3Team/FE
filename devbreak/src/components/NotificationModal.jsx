import styled from "@emotion/styled";
import PropTypes from "prop-types";

const NotificationModal = ({ notifications }) => {
  return (
    <ModalContainer>
      <DashBoard>
        <Header>
          <div>Check out your</div>
          <div>
            <strong>new notifications!</strong> <span>🔔</span>
          </div>
        </Header>
        <Divider />
        <Content>
          {notifications.map((notification, index) => (
            <div key={index}>
              <NotificationItem>
                <NotificationText>{notification.text}</NotificationText>
                <NotificationTime>{notification.time}</NotificationTime>
              </NotificationItem>
              <Divider /> {/* 모든 NotificationItem 아래에 Divider 추가 */}
            </div>
          ))}
        </Content>
        <ReadMoreButton>Read more</ReadMoreButton>
      </DashBoard>
    </ModalContainer>
  );
};

// prop-types를 사용하여 props 검증 추가
NotificationModal.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NotificationModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 2vh;
  right: 2vw;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashBoard = styled.div`
  box-sizing: border-box;
  padding: 4vh 3vw;
  width: 30vw;
  gap: 2vh;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  border: 0.1vh solid #02f798;
  backdrop-filter: blur(5vh);
  border-radius: 2vh;
  color: #ffffff;
`;

const Header = styled.h2`
  font-size: 2vh;
  color: #ffffff;
  text-align: left;
  margin-bottom: 2vh;
  display: flex;
  font-weight: 400;
  flex-direction: column;
  gap: 0.3vh;

  strong {
    font-weight: 700;
  }

  span {
    font-size: 2vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0; /* Divider로 구분되므로 gap 제거 */
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 0;
`;

const NotificationText = styled.span`
  font-size: 1.8vh;
  font-weight: 400;
  width: 80vw;
  color: #ffffff;
`;

const NotificationTime = styled.span`
  font-size: 1.5vh;
  width: 18vw;
  color: rgba(255, 255, 255, 0.6);
`;

const Divider = styled.hr`
  border: 0.1vh solid #ffffff;
  margin: 0;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: #ffffff;
  padding: 1.5vh 3vw;
  font-size: 3vh;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  margin-top: 2vh;

  &:hover {
    color: #02f798;
  }
`;
