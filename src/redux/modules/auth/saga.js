import { put, takeLatest } from "redux-saga/effects";
import { apiSignin } from "src/apiFunctions/authencation";
import httpServices from "src/services/httpServices";
import { appToast } from "src/views/components/AppToastContainer";
import * as type from "../../type";
function* login({ payload }) {
  const response = yield apiSignin(payload)
    .then((e) => {
      return e;
    })
    .finally(() => { });
  try {
    if (response?.status === 200) {
      httpServices.attachTokenToHeader(response.data.token);
      httpServices.saveLocalStorage(response.data.token);
      yield put({ type: type.REQUEST_LOGIN_SUCCESS, payload: response.data });
    } else {
      yield put({ type: type.REQUEST_LOGIN_FAILED, payload: response.data });
      appToast({
        toastOptions: { type: "error" },
        description: response.data.message,
      });
    }
  } catch (error) {
    appToast({
      toastOptions: { type: "error" },
      description: "Hệ thống đang được bảo trì",
    });
    yield put({ type: type.REQUEST_LOGIN_FAILED, payload: error });
  }
}

function* logout() {
  httpServices.clearLocalStorage();
}

export function* authSaga() {
  yield takeLatest(type.REQUEST_LOGIN, login);
  yield takeLatest(type.REQUEST_LOGOUT, logout);
}
