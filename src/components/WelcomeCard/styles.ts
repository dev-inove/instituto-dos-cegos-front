import styled from 'styled-components';

// container dos cards da tela home
export const HomeCardsContainer = styled.div`
  background-color: #f7f7f7;
`;

// --------- container do card Welcome ----------------------
export const ContainerCardWelcome = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 220px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCardWelcomeText = styled.div`
  display: flex;
  width: 667px;
  min-height: 145;
  word-wrap: break-word;
  flex-direction: column;
  align-content: space-between;
  align-self: center;
  margin-left: 2.5rem;
`;

export const ContainerCardWelcomeImage = styled.div`
  margin-right: 37px;
`;

export const CardWelcomeImage = styled.img`
  max-height: 165.17px;
  max-width: 276.67px;
  height: 165.17px;
  width: 276.67px;
`;

// texto de cabeçalho do card Welcome
export const CardWelcomeHeaderText = styled.h1`
  width: 276px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 47.25px;
  line-height: 71px;

  letter-spacing: 0.01em;

  color: #323232;
`;

// texto de descrição do card Welcome
export const CardWelcomeText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;
  letter-spacing: 0.01em;

  color: #666666;
`;

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
  align-items: center;
  @media (max-width: 1336px) {
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
  min-height: 178px;
  @media (max-width: 1336px) {
    width: 100%;
    margin-bottom: 25px;
  }
  background-color: #ffffff;

  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
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
  width: 203px;
  height: 135.33px;
`;
