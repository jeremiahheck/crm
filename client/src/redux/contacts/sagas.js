import {
    takeLeading,
    takeLatest,
    takeEvery,
    fork,
    all,
    call,
    put
} from 'redux-saga/effects'
import {
    fetchContactsAPI,
} from "../api";
import {
    fetchContactsResponse,
    fetchContacts
} from "./contactsActions";


function* getContactsSaga(action) {
    const loggedIn = true;
     if (loggedIn === true) {
         try {
             const data = yield call(fetchContactsAPI, {response: action.payload})
             yield put(fetchContactsResponse(data));
         } catch(e) {
             console.log(e);
         }
     } else {
         alert("Not logged in!");
     }
}


export default function* () {
    yield all([
        takeLeading(fetchContacts, getContactsSaga),
    ]);
}