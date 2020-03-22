import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import {
  Logo, Form, Input, PrimaryButton, LinkFooter,
} from '../../styles/utils';

export default function SignIn() {
  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <Form>
        <Input text="email" placeholder="E-mail" autoFocus />
        <Input type="password" placeholder="Senha" />
        <PrimaryButton type="submit">entrar</PrimaryButton>
      </Form>
      <LinkFooter>
        Ainda não tem conta?
        <Link to="/register"> Registre-se</Link>
      </LinkFooter>
    </>
  );
}
