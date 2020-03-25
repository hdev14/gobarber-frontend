import React from 'react';
import { useSelector } from 'react-redux';

import { UnForm, UnInput, PrimaryButton } from '../../styles/utils';

import { ProfileContainer, Line, SecondaryButton } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleOnSubmit(data) {
    console.tron.log(data);
  }

  return (
    <ProfileContainer>
      <UnForm initialData={profile} onSubmit={handleOnSubmit}>
        <UnInput type="text" name="name" placeholder="Seu nome" />
        <UnInput type="email" name="email" placeholder="Seu email" />
        <Line />
        <UnInput type="password" name="oldPassword" placeholder="Senha atual" />
        <UnInput type="password" name="newPassword" placeholder="Nova senha" />
        <UnInput type="password" name="confimPassword" placeholder="Confirmar nova senha" />
        <PrimaryButton type="submit">atualizar perfil</PrimaryButton>
      </UnForm>
      <SecondaryButton type="button">Sair</SecondaryButton>
    </ProfileContainer>
  );
}
