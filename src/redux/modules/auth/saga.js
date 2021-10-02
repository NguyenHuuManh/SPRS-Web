import { put, takeLatest } from "redux-saga/effects";
import { apiSignin } from "src/apiFunctions/authencation";
import httpServices from "src/services/httpServices";
import * as type from "../../type";
function* login({ payload }) {
  const response = yield apiSignin(payload)
    .then((e) => {
      return e;
    })
    .finally(() => {});
  try {
    if (response?.status === 200) {
      httpServices.attachTokenToHeader(response.data.token);
      httpServices.saveLocalStorage(response.data.token);
      const auth = {
        data: response.data.token,
        isLogin: true,
        error: null,
      };
      yield put({ type: type.REQUEST_LOGIN_SUCCESS, payload: auth });
    } else {
      yield put({ type: type.REQUEST_LOGIN_FAILED, error: response.err });
    }
  } catch (error) {
    yield put({ type: type.REQUEST_LOGIN_FAILED, error: response.err });
  }
}

function* logout() {
  httpServices.clearLocalStorage();
}

export function* authSaga() {
  yield takeLatest(type.REQUEST_LOGIN, login);
  yield takeLatest(type.REQUEST_LOGOUT, logout);
}
