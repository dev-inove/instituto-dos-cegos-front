import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../../assets/images/banner_login.svg'
import Logo from '../../assets/images/logo.svg'
import { IoMailOutline } from "react-icons/io5";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import * as S from './styles';

function Login() {
  return <S.Container>
    <S.ContainerInfo>
      <S.Welcome>
        <S.ImgLogo src={Logo} alt="Logo"/>
        <S.WelcomeText>Bem-vindo</S.WelcomeText>
      </S.Welcome>
      <S.FormLogin>
        <S.Line />
        <form>
          <S.FormInput>
            <S.LabelInput>Digite seu email</S.LabelInput>
            <S.Input type="email" placeholder='Ex: antoniocarlos@gmail.com'/>
          </S.FormInput>

          <S.FormInput>
            <S.LabelInput>Digite sua senha</S.LabelInput>
            <S.Input type="password" placeholder='Ex: 123456' icon={IoMailOutline}/>
          </S.FormInput>
        </form>
        


        <S.RecoverPassword>
          <div style={{ margin: 0}}>
            <S.CheckBox defaultChecked id="c1">
              <CheckboxPrimitive.Indicator>
                <CheckIcon />
              </CheckboxPrimitive.Indicator>
            </S.CheckBox>

            <S.LabelRemember>Lembrar de mim</S.LabelRemember>
          </div>
          <div style={{ margin: 2}}>
            <S.ForgotPassword href="#" onclick={() => {}}>Esqueceu sua senha?</S.ForgotPassword>
          </div>
        </S.RecoverPassword>
        <Link to="/home" >
          <S.ButtonLogin type="submit" >
            <S.TextButtonLogin>Entrar</S.TextButtonLogin>
          </S.ButtonLogin>
        </Link>
      </S.FormLogin>
    </S.ContainerInfo>
    <S.ContainerLogo>
      <S.ImgBanner src={Banner} alt="Banner"/>
    </S.ContainerLogo>
  </S.Container>;
}

export default Login;