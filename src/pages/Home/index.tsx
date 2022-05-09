import React, { useState } from 'react';

import welcomeLogo from '~/assets/images/welcome_logo.svg';
import assistaintsLogo from '~/assets/images/assistants_logo.svg'; // Logo de Assistidos Cadastrados
import activitiesLogo from '~/assets/images/activities_logo.svg'; // Logo de Atividades Cadastradas

import * as S from './styles';

function Home() {
  const [assisteds, setAssisted] = useState(95);
  const [activities, setActivities] = useState(27);
  return (
    <S.HomeContainer>
      <S.ContainerCardWelcome>
        <div /* Texto de Boas Vindas */>
          <h1>Bem-vindo</h1>
          <p>
            Aqui você pode gerenciar cada assistido e cada evento feito pela
            Casa de Saberes Cego Aderaldo
          </p>
        </div>
        <div /* Imagem de boas vindas */>
          <img
            src={welcomeLogo}
            alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
          />
        </div>
      </S.ContainerCardWelcome>
      <h2>Dados Gerais</h2>
      <S.ContainerCardsInfo /* Cards dos dados gerais */>
        <S.CardInfoAssisteds>
          <div /* Logo do Card Assistidos */>
            <img
              src={assistaintsLogo}
              alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
            />
          </div>
          <div /* Texto do Card Assistidos */>
            <S.CounterStyle>{assisteds}</S.CounterStyle>
            <p>Assistidos cadastrados</p>
          </div>
        </S.CardInfoAssisteds>
        <S.CardInfoActivities
        /* Card de Atividades Cadastradas */
        >
          <div /* Logo do Card Atividades */>
            <img
              src={activitiesLogo}
              alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
            />
          </div>
          <div /* Texto do Card Atividades */>
            <S.CounterStyle>{activities}</S.CounterStyle>
            <p>Atividades cadastradas</p>
          </div>
        </S.CardInfoActivities>
      </S.ContainerCardsInfo>
    </S.HomeContainer>
  );
}

export default Home;
