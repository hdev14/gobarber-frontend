import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { UnForm, UnInput, PrimaryButton } from '../../styles/utils';
import { ProfileContainer, Line, SecondaryButton } from './styles';

export default function Profile() {
  const disptach = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleOnSubmit(data) {
    disptach(updateProfileRequest(data));
  }

  function handleSignOut() {
    disptach(signOut());
  }

  return (
    <ProfileContainer>
      <UnForm initialData={profile} onSubmit={handleOnSubmit}>
        <AvatarInput name="avatar_id" />

        <UnInput type="text" name="name" placeholder="Seu nome" />
        <UnInput type="email" name="email" placeholder="Seu email" />

        <Line />

        <UnInput type="password" name="oldPassword" placeholder="Senha atual" />
        <UnInput type="password" name="password" placeholder="Nova senha" />
        <UnInput type="password" name="confirmPassword" placeholder="Confirmar nova senha" />
        <PrimaryButton type="submit">atualizar perfil</PrimaryButton>
      </UnForm>
      <SecondaryButton
        type="button"
        onClick={handleSignOut}
      >
        Sair
      </SecondaryButton>
    </ProfileContainer>
  );
}
