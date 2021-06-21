import {
    FETCH_INIT_DATA,
    CHANGE_THEME
} from './types'

const initialState = {
    theme: "Light",
}

export default function initReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INIT_DATA :
            return state.theme;
        case CHANGE_THEME :
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}
