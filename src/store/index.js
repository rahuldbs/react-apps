import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "../reducers/counterReducer";
import rootSaga from "../saga/counterSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the store
const store = createStore(
    counterReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
