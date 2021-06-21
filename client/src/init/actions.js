import {CHANGE_THEME, FETCH_INIT_DATA} from "./types";

export const fetchInit = () => {
    return {
        type: FETCH_INIT_DATA
    }
}

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}