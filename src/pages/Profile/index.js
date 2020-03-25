import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { UnForm, UnInput, PrimaryButton } from '../../styles/utils';
import { ProfileContainer, Line, SecondaryButton } from './styles';

export default function Profile() {
  const disptach = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleOnSubmit(data) {
    disptach(updateProfileRequest(data));
  }

  return (
    <ProfileContainer>
      <UnForm initialData={profile} onSubmit={handleOnSubmit}>
        <UnInput type="text" name="name" placeholder="Seu nome" />
        <UnInput type="email" name="email" placeholder="Seu email" />
        <Line />
        <UnInput type="password" name="oldPassword" placeholder="Senha atual" />
        <UnInput type="password" name="password" placeholder="Nova senha" />
        <UnInput type="password" name="confirmPassword" placeholder="Confirmar nova senha" />
        <PrimaryButton type="submit">atualizar perfil</PrimaryButton>
      </UnForm>
      <SecondaryButton type="button">Sair</SecondaryButton>
    </ProfileContainer>
  );
}
