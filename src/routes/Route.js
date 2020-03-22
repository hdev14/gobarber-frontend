import React from 'react';
import { Route as R, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../layouts/auth';
import DefaultLayout from '../layouts/default';

export default function Route({ component: Component, isPrivate, ...rest }) {
  const signer = false;

  if (!signer && isPrivate) {
    return <Redirect path="/" />;
  }

  if (signer && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signer ? AuthLayout : DefaultLayout;

  return (
    <R
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};
