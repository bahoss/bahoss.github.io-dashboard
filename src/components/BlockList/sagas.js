import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../../Api";

function* fetchData(action) {
  try {
    const data = yield call(Api.getAll, action.payload);
    yield put({ type: "DATA_FETCH_SUCCEEDED", data: data });
  } catch (e) {
    yield put({ type: "DATA_FETCH_FAILED", message: e.message });
  }
}

function* fetchSaga() {
  yield takeEvery("DATA_FETCH_START", fetchData);
}

export default fetchSaga;
