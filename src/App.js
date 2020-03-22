import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './configs/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store';

import GlobaStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobaStyle />
        <Routes />
      </Router>
    </Provider>
  );
}
