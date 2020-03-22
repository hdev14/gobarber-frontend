import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import {
  Logo, UnForm, UnInput, PrimaryButton, LinkFooter,
} from '../../styles/utils';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Logo src={logo} alt="GoBarber" />
      <UnForm onSubmit={handleSubmit}>
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
