import React from 'react';
import Logo from '../../assets/images/logo.svg';

import * as S from './styles';

const SideBar = () => {
  return (
    <S.Container>
      <S.ContainerAside>
        <S.ContainerLogo>
          <S.ImgLogo src={Logo} alt="Logo"/>
        </S.ContainerLogo>
        <S.ContainerHeader>
          <S.NavLinkItens to="/home" >
            <S.IconFiHome size={20}/>
            <S.TextIcons>Página inicial</S.TextIcons>
          </S.NavLinkItens>
          <S.NavLinkItens to="/assisted" >
            <S.IconFiUsers size={20}/>
            <S.TextIcons>Assistidos</S.TextIcons>
          </S.NavLinkItens>
          <S.NavLinkItens exact to="/events">
            <S.IconFiCalendar size={20}/>
            <S.TextIcons>Eventos</S.TextIcons>
          </S.NavLinkItens>
          <S.NavLinkItens exact to="/profile" >
            <S.IconFiUser size={20}/>
            <S.TextIcons>Meu perfil</S.TextIcons>
          </S.NavLinkItens>
        </S.ContainerHeader>
        <S.ContainerBottom>
          <S.Line />
          <S.NavLinkItens exact to="/" >
            <S.IconFiLogOut size={20}/>
            <S.TextIcons>Sair</S.TextIcons>
          </S.NavLinkItens>
        </S.ContainerBottom>
      </S.ContainerAside>
    </S.Container>
  )
}

export default SideBar;