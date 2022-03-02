import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {FiHome, FiUsers, FiCalendar, FiUser, FiLogOut} from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;
  position: fixed;
  display: flex;
  box-shadow: inset 0 0 1em gold, 0 0 1em rgba(0, 0, 1, 0.123);
`;

export const ContainerAside = styled.aside`
  width: 16rem;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  width: 12rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin: 30px 0 80px 0;
  justify-content: center;
  align-items: center;
`;

export const NavLinkItens = styled(NavLink)`
  display: flex;
  height: 50px;
  width: 85%;
  margin-left: 15px;
  margin-right: 20px;
  border-radius: 5px;
  justify-content: row;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  margin-bottom: 30px;

  &:hover {
    background-color: var(--navigationHoverSideBar);
  }
`;

export const IconFiHome = styled(FiHome)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const IconFiUsers = styled(FiUsers)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const IconFiCalendar = styled(FiCalendar)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const IconFiUser = styled(FiUser)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const IconFiLogOut = styled(FiLogOut)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const TextIcons = styled.p`
  margin-left: 8px;
  margin-top: 1px;
  color: var(--textColor500);
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 20px;
  background-color: var(--textColor100);
`;

export const ContainerBottom = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;








