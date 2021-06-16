import {
    FETCH_CONTACTS,
    FETCH_CONTACT,
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT
} from './contactTypes';
// ========================================


 export const fetchContacts = (contacts) => {
     return {
         type: FETCH_CONTACTS,
         payload: contacts
     }
 }


export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}
