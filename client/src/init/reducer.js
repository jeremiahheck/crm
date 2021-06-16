import {
    FETCH_INIT_DATA
} from './types'
import {FETCH_CONTACTS} from "../redux/contacts/contactTypes";

const initialState = {
    loading: false,
    name: null,
}

export default function initReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INIT_DATA :
            return {
                ...state,
                loading: state.loading,
                name: state.name,
            }
        default:
            return state;
    }
}
