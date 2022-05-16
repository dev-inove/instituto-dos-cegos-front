import React from 'react';

import * as S from './styles';
import HomeCards from '~/components/Cards/HomeCards';

function Home() {
  return (
    <S.HomeContainer>
      <HomeCards />
    </S.HomeContainer>
  );
}

export default Home;
