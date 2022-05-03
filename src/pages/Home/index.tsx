import React, { useState } from 'react';

import welcomeLogo from '~/assets/images/welcome_logo.svg';
import assistaintsLogo from '~/assets/images/assistants_logo.svg'; // Logo de Assistidos Cadastrados
import activitiesLogo from '~/assets/images/activities_logo.svg'; // Logo de Atividades Cadastradas

function Home() {
  const [assisteds, setAssisted] = useState(0);
  const [activities, setActivities] = useState(0);
  return (
    <div>
      <h1>Tela home</h1>
      <div /* Cards do Home */>
        <div /* Card de boas vindas */>
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
        </div>
        <h2>Dados Gerais</h2>
        <div /* Cards dos dados gerais */>
          <div
          /* Card de Assistidos Cadastrados */
          >
            <div /* Logo do Card Assistidos */>
              <img
                src={assistaintsLogo}
                alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
              />
            </div>
            <div /* Texto do Card Assistidos */>
              <span>{assisteds}</span>
              <p>Assistidos cadastrados</p>
            </div>
          </div>
          <div
          /* Card de Atividades Cadastradas */
          >
            <div /* Logo do Card Atividades */>
              <img
                src={activitiesLogo}
                alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
              />
            </div>
            <div /* Texto do Card Atividades */>
              <span>{activities}</span>
              <p>Atividades cadastradas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
