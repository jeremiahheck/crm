import {
    ADD_CONTACT,
    FETCH_CONTACTS,
} from "./contactTypes";
// ========================================

const initialState = {
    Contacts: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS :
            //alert("fetched");
            return {
                ...state,
                Contacts: action.payload,
            }
        case ADD_CONTACT :
            alert(action.payload);
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