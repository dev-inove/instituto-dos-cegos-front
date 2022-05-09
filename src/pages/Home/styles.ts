import styled from 'styled-components';

export const ContainerCardWelcome = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: #3f3f3f;

  justify-content: center;
  align-items: center;
`;

export const CounterStyle = styled.span`
  font-weight: 700;
  font-size: 106.32px;
  line-height: 126px;
  color: #ef6d1f;
`;

export const CardInfoAssisteds = styled.div`
  display: flex;
  justify-content: center;
  width: 599px;
  height: 180px;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const CardInfoActivities = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 599px;
  height: 180px;
  min-width: 35vw;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const ContainerCardsInfo = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75vw;
  min-width: 70vw;
  min-heigth: 100vh;
  background-color: #f7f7f7;
  margin-top: 2rem;
  margin-right: 4rem;
  @media (min-width: 1598px) {
    max-width: 100vw;
  }
`;
