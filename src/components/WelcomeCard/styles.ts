import styled from 'styled-components';

// --------- container do card Welcome ----------------------
export const ContainerCardWelcome = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 220px;
  min-width: 484px;
  min-height: 178px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCardWelcomeText = styled.div`
  display: flex;
  width: clamp(25rem, 48rem, 50rem);
  word-wrap: break-word;
  flex-direction: column;
  align-content: space-between;
  align-self: center;
  margin-left: 2.5rem;
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
`;

// texto de cabeçalho do card Welcome
export const CardWelcomeHeaderText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: clamp(0.5rem, 3rem, 5rem);

  letter-spacing: 0.01em;

  color: #323232;
`;

// texto de descrição do card Welcome
export const CardWelcomeText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(0.05rem, 1.5rem, 3rem);
  line-height: auto;
  letter-spacing: 0.01em;

  color: #666666;
`;
