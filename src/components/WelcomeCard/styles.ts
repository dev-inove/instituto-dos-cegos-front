import styled from 'styled-components';

// --------- container do card Welcome ----------------------
export const ContainerCardWelcome = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 220px;
  min-width: 484px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1366px){
    height: 160px;
  }
  @media(max-width: 1080px){
    height: 128px;
  }
`;

export const ContainerCardWelcomeText = styled.div`
  display: flex;
  width: 50rem;
  word-wrap: break-word;
  flex-direction: column;
  align-content: space-between;
  align-self: center;
  margin-left: 2.5rem;

  @media(max-width: 1366px){
    width: auto;
  }
`;

export const ContainerCardWelcomeImage = styled.div`
  margin-right: 37px;
  margin-left: 2rem;
`;

export const CardWelcomeImage = styled.img`
  max-width: 100%;
  min-width: 10rem;
  height: 100%;
  min-height: 50px;
  padding: 1em 0;
  object-position: center;

  @media(max-width: 1366px){
    width: 90%;
  }
  @media(max-width: 1080px){
    width: 70%;
  }
`;

// texto de cabeçalho do card Welcome
export const CardWelcomeHeaderText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;

  letter-spacing: 0.01em;

  color: #323232;

  @media(max-width: 1366px){
    font-size: 2.5rem;
  }

  @media(max-width: 1080px){
    font-size: 2rem;
  }
`;

// texto de descrição do card Welcome
export const CardWelcomeText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: auto;
  letter-spacing: 0.01em;

  color: #666666;

  @media(max-width: 1366px){
    font-size: 1.25rem;
  }
  @media(max-width: 1080px){
    font-size: 1rem;
  }
`;
