import {
    FETCH_CONTACTS,
    FETCH_CONTACTS_RESPONSE,
    ADD_CONTACT,
    ADD_CONTACT_RESPONSE,
    DELETE_CONTACT,
    UPDATE_CONTACT
} from './contactTypes';
// ========================================


 export const fetchContacts = () => {
     return {
         type: FETCH_CONTACTS
     }
 }

export const fetchContactsResponse = (contacts) => {
    return {
        type: FETCH_CONTACTS_RESPONSE,
        payload: contacts
    }
}
