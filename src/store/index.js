import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import {reducer} from "../components/Router/reducer";
import MySaga from "../components/Router/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)

);

sagaMiddleware.run(MySaga);
