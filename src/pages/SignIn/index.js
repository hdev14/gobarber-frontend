import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import {
  Logo, UnForm, UnInput, PrimaryButton, LinkFooter,
} from '../../styles/utils';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo é obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Campo obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <UnForm onSubmit={handleSubmit} schema={schema}>
        <UnInput name="email" text="email" placeholder="E-mail" autoFocus />
        <UnInput name="password" type="password" placeholder="Senha" />
        <PrimaryButton type="submit">entrar</PrimaryButton>
      </UnForm>
      <LinkFooter>
        Ainda não tem conta?
        <Link to="/register"> Registre-se</Link>
      </LinkFooter>
    </>
  );
}
