import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";

import {reducer} from "../Entities/Systems/reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))

);

sagaMiddleware.run(rootSaga);
