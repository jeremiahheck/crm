import {BASE_URI, ROUTE_CONTACTS_SCREEN, API} from "../../routeConstants";
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import {ContactsAPI} from "../api";
import {fetchContacts} from "./contactsActions";

const contactsAPI = new ContactsAPI;

export default function* getContacts() {
    yield takeEvery(fetchContacts, getContactsAPI)
}

function* getContactsAPI(action) {
    const loggedIn = true;
     if (loggedIn === true) {
         try {
             //fetch(`${API}${ROUTE_CONTACTS_SCREEN}`)
                 //.then(response => response.json())
                 //.then(data =>  fetchContacts(data));
             const data = yield call(contactsAPI.fetchData, {response: action.payload})
             yield put(fetchContacts(data));
         } catch(e) {
             console.log(e);
         }
     } else {
         console.log("Not logged in!");
     }
}
