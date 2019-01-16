import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../../Api";

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchData(action) {
  try {
    const data = yield call(Api.getAll, action.payload);
    yield put({ type: "DATA_FETCH_SUCCEEDED", data: data });
  } catch (e) {
    yield put({ type: "DATA_FETCH_FAILED", message: e.message });
  }
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* mySaga() {
  yield takeEvery("DATA_FETCH_SUCCEEDED", fetchData);
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/

/*function* mySaga() {
  yield takeLatest("DATA_FETCH_REQUESTED", fetchData);
}*/

export default mySaga;
