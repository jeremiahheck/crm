import {
    ADD_CONTACT,
    DELETE_CONTACT,
    FETCH_CONTACT,
    FETCH_CONTACTS,
    UPDATE_CONTACT
} from "./contactTypes";
// ========================================

const initialState = {
    Contacts: [
        {
            id: 0,
            firstName: "ReduxDefault",
            lastName: "ReduxDefault",
            email: "ReduxDefault",
        }
    ]
}


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT :
            return Object.assign({}, state, { //copies the object instead of mutating the state
                Contacts: state.Contacts.concat(action.payload)
            });
        case FETCH_CONTACT :
            return Object.assign({}, state, { //copies the object instead of mutating the state
                Contacts: state.Contacts.concat(action.payload)
            });
        case UPDATE_CONTACT :
            return Object.assign({}, state, { //copies the object instead of mutating the state
                Contacts: state.Contacts.concat(action.payload)
            });
        case DELETE_CONTACT :
            return Object.assign({}, state, { //copies the object instead of mutating the state
                Contacts: state.Contacts.concat(action.payload)
            });
        case FETCH_CONTACTS :
            return Object.assign({}, state, { //copies the object instead of mutating the state
                Contacts: state.Contacts.concat(action.payload)
            });
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

export default contactReducer;