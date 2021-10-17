import { combineReducers } from "redux";
import { all, spawn, call } from "redux-saga/effects";
import { authSaga, authReducer } from "./modules/auth";
import { profileSaga, profileReducer } from "./modules/profile";
import { sideBarReducer } from "./modules/sidebar";

export function* rootSagas() {
  const sagas = [authSaga, profileSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export const rootReducers = combineReducers({
  authReducer,
  profileReducer,
  sideBarReducer,
});
