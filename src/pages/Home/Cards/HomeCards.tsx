import React from 'react';

import * as S from './styles';
import WelcomeCard from './WelcomeCard';
import Infocards from './InfoCards';

function HomeCards() {
  return (
    <S.HomeCardsContainer>
      <WelcomeCard />
      <S.InfoHeaderText>Dados Gerais</S.InfoHeaderText>
      <Infocards />
    </S.HomeCardsContainer>
  );
}

export default HomeCards;
