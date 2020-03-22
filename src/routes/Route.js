import React from 'react';
import { Route as R, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Route({ component: Component, isPrivate, ...rest }) {
  const signer = true;

  if (!signer && isPrivate) {
    return <Redirect path="/" />;
  }

  if (signer && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <R {...rest} component={Component} />;
}

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};
