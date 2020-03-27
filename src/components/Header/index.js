import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '../Notifications';

import { Logo } from '../../styles/utils';
import logo from '../../assets/logo_header.svg';
import {
  Navbar, Content, Profile,
} from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Navbar>
      <Content>
        <div>
          <Logo id="logo-header" src={logo} alt="Gobarber" />
          <Link id="link-header" to="/dashboard">dashboard</Link>
        </div>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">meu perfil</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'}
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Navbar>
  );
}
