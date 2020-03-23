import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import Wrapper from './styles';
import { Container } from '../../styles/utils';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
