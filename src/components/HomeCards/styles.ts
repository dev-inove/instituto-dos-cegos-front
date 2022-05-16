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
