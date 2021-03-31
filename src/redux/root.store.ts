import { sagas } from "./root.saga";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {reducers } from "./root.reducer";
// Middlewares setup
const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Running sagas
sagaMiddleware.run(sagas);

export { store };
