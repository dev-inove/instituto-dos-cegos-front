import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';

import * as S from './styles';

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date());

  return parsedDate;
}

const today = new Date();

const schema = Yup.object().shape({
  name: Yup.string().required('O e-mail é obrigatório'),
  socialName: Yup.string().min(2, 'Digite pelo menos 2 caracteres'),
  date: Yup.date()
    .transform(parseDateString)
    .max(today)
    .required('A data é obrigatória'),
  civilState: Yup.string().required('Estado civil é obrigatório'),
  sex: Yup.string().required('O sexo é obrigatório'),
  nationality: Yup.string().required('A nacionalidade é obrigatório'),
  naturalness: Yup.string(),
  degreeDisability: Yup.string().required(
    'O grau de deficiência é obrigatório'
  ),
  number: Yup.number()
    .min(9, 'Digite pelo menos 9 digitos')
    .integer('Deve ser um número valido')
    .required('O número é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('O e-mail é obrigatório'),
  RG: Yup.number()
    .integer('Deve ser um número valido')
    .required('O RG é obrigatório'),
  RGDispatcher: Yup.string().required('O orgão expeditor é obrigatório'),
  RGEmissionDate: Yup.date()
    .transform(parseDateString)
    .max(today)
    .required('A data de emissão é obrigatória'),
  CPF: Yup.number()
    .integer('Deve ser um número valido')
    .min(11, 'Digite pelo menos 11 digitos')
    .required('O CPF é obrigatório'),
});

function Assisted() {
  const registerInfo = {
    socialName: '',
    name: '',
    date: '',
    civilState: '',
    sex: '',
    nationality: '',
    naturalness: '',
    degreeDisability: '',
    number: '',
    email: '',
    RG: '',
    RGDispatcher: '',
    RGEmissionDate: '',
    CPF: '',
  };

  return (
    <div>
      <S.Welcome>Cadastrar assistido</S.Welcome>
      <S.WelcomeParagraph>
        Preencha todos os campos abaixo para cadastrar uma pessoa.
      </S.WelcomeParagraph>
    </div>
  );
}

export default Assisted;
