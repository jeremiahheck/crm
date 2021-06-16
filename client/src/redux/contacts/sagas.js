import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import {fetchContactsAPI, addContactsAPI} from "../api";
import {addContact, fetchContacts} from "./contactsActions";


export default function* contactsSaga() {
    yield takeLatest(fetchContacts, getContactsAPI)
}

function* getContactsAPI(action) {
    const loggedIn = true;
     if (loggedIn === true) {
         try {
             const data = yield call(fetchContactsAPI, {response: action.payload})
             yield put(fetchContacts(data));
         } catch(e) {
             console.log(e);
         }
     } else {
         console.log("Not logged in!");
     }
}
