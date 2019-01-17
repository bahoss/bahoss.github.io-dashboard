import { fork } from "redux-saga/effects";
import fetchSaga from "../components/BlockList/sagas";
import patchSaga from "../components/Comments/sagas";

export default function* rootSaga() {
  yield [fork(fetchSaga), fork(patchSaga)];
}
