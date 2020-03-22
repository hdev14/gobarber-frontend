import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import {
  Logo, Form, Input, PrimaryButton, LinkFooter,
} from '../../styles/utils';

export default function SignUp() {
  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <Form>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <PrimaryButton type="submit">registrar</PrimaryButton>
      </Form>
      <LinkFooter>
        Já tenho
        <Link to="/"> conta.</Link>
      </LinkFooter>
    </>
  );
}
