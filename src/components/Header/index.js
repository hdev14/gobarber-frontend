import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Logo } from '../../styles/utils';
import logo from '../../assets/logo_header.svg';
import {
  Navbar, Content, Profile,
} from './styles';

export default function Header() {
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
              <strong>Hermerson Araújo</strong>
              <Link to="/profile">meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Hermerson Araújo" />
          </Profile>
        </aside>
      </Content>
    </Navbar>
  );
}
