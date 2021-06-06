import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Worker Saga: async increment task
export function* incrementAsync() {
    yield put({ type: "REQUEST" });
    yield delay(500);
    console.log("increment saga");
    yield put({ type: "INCREMENT" });
}

export function* decrementAsync() {
    yield put({ type: "REQUEST" });
    yield delay(600);
    console.log("decrement saga");
    yield put({ type: "DECREMENT" });
}

// Watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}