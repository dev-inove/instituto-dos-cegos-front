import styled from 'styled-components';

export const InfoHeaderText = styled.h1`
  margin-top: 50px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 31.5px;
  line-height: 47px;

  color: #323232;
`;

// --------- container dos cards de informações ----------------------
export const ContainerCardsInfo = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 1366px){
    flex-direction: column;
  }
`;

export const CounterStyle = styled.span`
  font-family: 'Rubik', sans-serif;

  font-style: normal;
  font-weight: 700;
  font-size: 106.32px;
  line-height: 126px;
  color: #ef6d1f;

  margin-right: 15px;


`;

export const InfoCard = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 180px;
  width: 49%;
  min-width: 484px;
  min-height: 96px;

  background-color: #ffffff;

  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;

  @media(max-width: 1366px){
    height: 140px;
    width: auto;
  }
  @media(max-width: 1080px){
    height: 96px;
    padding: 4rem 0;
  }
`;

export const ContainerInfoCardImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerInfoCardText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InforCardText = styled.p`
  align-self: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;

  color: #666666;

  width: 135px;
  height: 64px;
`;

export const InforCardImage = styled.img`
  max-width: 100%;
  min-width: 5rem;
  height: 100%;
  min-height: 50px;

  @media(max-width: 1366px){
    width: 90%;
  }

  @media(max-width: 1080px){
    width: 75%;
  }
`;
