import {
    ADD_CONTACT,
    DELETE_CONTACT,
    FETCH_CONTACT,
    FETCH_CONTACTS,
    UPDATE_CONTACT
} from "./contactTypes";
// ========================================

const initialState = {
    Contacts: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS :
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