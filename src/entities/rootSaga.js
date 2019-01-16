import { fork } from 'redux-saga/effects';
import fetchSaga from '../components/Router/sagas';
import patchSaga from '../components/AddComment/sagas';

export default function* rootSaga() {
    yield [
        fork(fetchSaga),
        fork(patchSaga)
    ];
}
