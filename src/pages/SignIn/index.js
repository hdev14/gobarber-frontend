import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import {
  Logo, UnForm, UnInput, PrimaryButton, LinkFooter,
} from '../../styles/utils';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <UnForm onSubmit={handleSubmit}>
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
