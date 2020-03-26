import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  laoding: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draftState.laoding = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draftState.token = action.payload.token;
        draftState.signed = true;
        draftState.laoding = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draftState.laoding = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draftState.token = null;
        draftState.signed = false;
        break;
      }

      default:
    }
  });
}
