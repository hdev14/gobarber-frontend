import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import {
  Logo, UnForm, UnInput, PrimaryButton, LinkFooter,
} from '../../styles/utils';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Campo obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <UnForm onSubmit={handleSubmit} schema={schema}>
        <UnInput name="name" type="text" placeholder="Nome" autoFocus />
        <UnInput name="email" type="email" placeholder="E-mail" />
        <UnInput name="password" type="password" placeholder="Senha" />
        <PrimaryButton type="submit">registrar</PrimaryButton>
      </UnForm>
      <LinkFooter>
        Já tenho
        <Link to="/"> conta.</Link>
      </LinkFooter>
    </>
  );
}
