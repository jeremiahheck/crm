import {
    FETCH_CONTACTS,
    ADD_CONTACT,
    ADD_CONTACT_RESPONSE,
    FETCH_CONTACTS_RESPONSE,
} from "./contactTypes";
// ========================================

const initialState = {
    Contacts: [{}]
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_RESPONSE :
            return {
                ...state,
                Contacts: action.payload,
            }
        case '@@router/LOCATION_CHANGE': {
            const {
                payload: { location: { pathname = '' } = {} } = {},
            } = action;
            return state;
        }
        default:
            return state;
    }
}

export default contactsReducer;