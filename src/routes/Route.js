import React from 'react';
import { Route as R, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../layouts/auth';
import DefaultLayout from '../layouts/default';

import { store } from '../store';

export default function Route({ component: Component, isPrivate, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect path="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? AuthLayout : DefaultLayout;

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
