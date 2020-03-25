import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;
  try {
    const data = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    console.tron.log(data);
    const response = yield call(api.put, '/users', data);
    console.tron.log(response);

    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao atualizar o perfil, por favor verifique os dados.');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
