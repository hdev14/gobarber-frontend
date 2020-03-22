import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Container from '../../styles/container';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
