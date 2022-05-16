import styled from 'styled-components';

// container da página
export const HomeContainer = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  width: calc(100vw - 16rem);
  padding: 28px 50px 3rem 30px;
  @media (max-width: 946px) {
    width: calc(947px - 16rem);
  }
`;

export default HomeContainer;
