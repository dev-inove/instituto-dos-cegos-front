import React from 'react';
import { IconType } from 'react-icons';

import * as S from './styles';

interface PropsButtonPrimary {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  iconName: IconType | null;
}

function ButtonPrimary({ type, name, iconName }: PropsButtonPrimary) {
  return (
    <S.ButtonContainer type={type}>
      <S.ButtonContent>
        {iconName !== null
          ? React.createElement(iconName, {
              color: '#fff',
              fontSize: 13,
            })
          : null}
        <S.TextButtonName>{name}</S.TextButtonName>
      </S.ButtonContent>
    </S.ButtonContainer>
  );
}

export default ButtonPrimary;
