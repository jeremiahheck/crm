import {FETCH_INIT_DATA} from "./types";

export const fetchInit = (initData) => {
    return {
        FETCH_INIT_DATA,
        payload: initData
    }
}