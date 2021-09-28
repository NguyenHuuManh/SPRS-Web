import { takeLatest, put } from "redux-saga/effects";
import { apiSignin } from "src/apiFunctions/login";
import httpServices from "src/services/httpServices";
import * as type from "../../type";
function* login({ payload }) {
  const { userName, password } = payload;
  // const response = {
  //   code: 200,
  //   data: "hello",
  //   err: null,
  // };
  const response = yield apiSignin({ username: userName, passWord: password })
    .then((e) => {
      const response = {
        code: 200,
        data: payload,
        err: null,
      };
      return response;
    })
    .finally(() => {});
  httpServices.saveLocalStorage(response.data);
  try {
    if (response.code == 200) {
      yield put({ type: type.REQUEST_LOGIN_SUCCESS, payload: response.data });
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
