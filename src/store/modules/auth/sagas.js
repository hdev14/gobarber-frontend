import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  const { user, token } = response.data;

  if (!user.provider) {
    console.tron.error('Nâo é um provider');
    return;
  }

  yield put(signInSuccess(user, token));

  history.push('/dashboard');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
