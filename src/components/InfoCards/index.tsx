import React, { useEffect, useState } from 'react';

import assistaintsLogo from '~/assets/images/assistants_logo.svg'; // Logo de Assistidos Cadastrados
import activitiesLogo from '~/assets/images/activities_logo.svg'; // Logo de Atividades Cadastradas

import * as S from './styles';

function Infocards() {
  const [assisteds, setAssisted] = useState(0);
  const [activities, setActivities] = useState(0);

  useEffect(() => {
    setAssisted(95);
    setActivities(27);
  }, []);

  return (
    <>
      <S.InfoHeaderText>Dados Gerais</S.InfoHeaderText>
      <S.ContainerCardsInfo>
        <S.InfoCard /* Card de Assistidos */>
          <S.ContainerInfoCardImage /* Logo do Card Assistidos */>
            <S.InforCardImage
              src={assistaintsLogo}
              alt='Uma mulher fazendo companhia para idosos'
            />
          </S.ContainerInfoCardImage>
          <S.ContainerInfoCardText /* Texto do Card Assistidos */>
            <S.CounterStyle>{assisteds}</S.CounterStyle>
            <S.InforCardText>Assistidos cadastrados</S.InforCardText>
          </S.ContainerInfoCardText>
        </S.InfoCard>
        <S.InfoCard
        /* Card de Atividades Cadastradas */
        >
          <S.ContainerInfoCardImage /* Logo do Card Atividades */>
            <S.InforCardImage
              src={activitiesLogo}
              alt='Dois idosos fazendo alongamentos'
            />
          </S.ContainerInfoCardImage>
          <S.ContainerInfoCardText /* Texto do Card Atividades */>
            <S.CounterStyle>{activities}</S.CounterStyle>
            <S.InforCardText>Atividades cadastradas</S.InforCardText>
          </S.ContainerInfoCardText>
        </S.InfoCard>
      </S.ContainerCardsInfo>
    </>
  );
}

export default Infocards;
