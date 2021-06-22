import {
    FETCH_CONTACTS,
    FETCH_CONTACTS_RESPONSE,
    FETCH_CONTACT
} from './contactTypes';
// ========================================


export const fetchContacts = () => {
    return {
        type: FETCH_CONTACTS
    }
}

export const fetchContact = (id) => {
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
