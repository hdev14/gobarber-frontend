import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    if (!user.provider) {
      toast.error('Apenas prestadore podem acessar o sistema');
      return;
    }

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (err) {
    toast.error('E-mail ou senha incorretos');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    toast.success('Cadastro realizado com sucesso!');
    history.push('/');
  } catch (err) {
    toast.error('Falha ao cadastrar, por favor verifique seus dados!');
    history.push('/register');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
