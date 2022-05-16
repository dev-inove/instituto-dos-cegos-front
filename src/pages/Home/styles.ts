import styled from 'styled-components';

// container da página
export const HomeContainer = styled.div`
  background-color: var(--backgroundGray);
  height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
  width: calc(100vw - 16rem);
  padding: 3rem 5rem 3rem 3rem;
  @media (max-width: 946px) {
    width: calc(947px - 16rem);
  }
`;

export default HomeContainer;
