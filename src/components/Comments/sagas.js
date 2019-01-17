import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../../Api";

function* patchData(action) {
  try {
    const data = yield call(Api.patchComent, action.payload);
    yield put({ type: "DATA_PATCH_SUCCEEDED", payload: data });
    yield put({ type: "DATA_FETCH_START", data: "" });
  } catch (e) {
    yield put({ type: "DATA_PATCH_FAILED", message: e.message });
  }
}

function* patchSaga() {
  yield takeEvery("DATA_PATCH_START", patchData);
}
export default patchSaga;
