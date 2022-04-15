import React, {useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.svg';
import SidebarItems from "./SidebarItems";

import * as S from './styles';

const SideBar = (props: any) => {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || undefined);

  function changeActiveIndex(newIndex: any) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== "/") {
        return  "/" + path;
    }
    return path;
  }

  useEffect(()=> {
      const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname))
      changeActiveIndex(activeItem);
  }, [location]);

  return (
    <S.Container>
      <S.ContainerAside>
        <S.ContainerLogo>
          <S.ImgLogo src={Logo} alt="Logo"/>
        </S.ContainerLogo>
        <S.ContainerHeader>
          {
            SidebarItems.map((item, index)=> {
              return (
                <S.NavLink to={item.route} key={item.id}>
                  <S.NavLinkItens active={index === activeIndex}>
                    <S.IconLink>{item.iconName}</S.IconLink>
                    <S.TextIcons>{item.name}</S.TextIcons>
                  </S.NavLinkItens>
                </S.NavLink>
              );
            })
          }
        </S.ContainerHeader>
        <S.ContainerBottom>
          <S.Line />
          <S.NavLink to="/" >
            <S.IconFiLogOut size={20}/>
            <S.TextIcons>Sair</S.TextIcons>
          </S.NavLink>
        </S.ContainerBottom>
      </S.ContainerAside>
    </S.Container>
  )
}

export default SideBar;
