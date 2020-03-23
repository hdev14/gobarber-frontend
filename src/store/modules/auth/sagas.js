import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

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
      console.tron.error('Nâo é um provider');
      return;
    }

    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
