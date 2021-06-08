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
         FETCH_CONTACTS,
         payload: contacts

     }
 }

export const fetchContact = (contact) => {
    return {
        FETCH_CONTACT,
        payload: contact

    }
}

export const updateContact = (contact) => {
    return {
        UPDATE_CONTACT,
        payload: contact

    }
}

export const deleteContact = (contact) => {
    return {
        DELETE_CONTACT,
        payload: contact

    }
}

export const addContact = (contact) => { //player is the parameter to pass in on the DOM
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}
