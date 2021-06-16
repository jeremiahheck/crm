import initSaga from "../init/sagas";
import { all, call } from 'redux-saga/effects';
import contactsSaga from "./contacts/sagas";

export default function* rootSaga() {
    yield all([
        call(initSaga),
        call(contactsSaga)
    ])
};