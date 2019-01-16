import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";

import {reducer} from "../entities/reducer";
import rootSaga from "../entities/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))

);

sagaMiddleware.run(rootSaga);
