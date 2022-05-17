import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import ButtonPrimary from '~/components/ButtonPrimary';
import * as S from './styles';

function Assisted() {
  const history = useHistory();

  function toRegister() {
    history.push('/assistedRegister');
  }

  return (
    <div>
      <h1>Assisted</h1>
      <ButtonPrimary
        type='button'
        name='Cadastrar'
        iconName={FiPlus}
        onClick={toRegister}
      />
    </div>
  );
}

export default Assisted;
