import {FETCH_INIT_DATA} from "./types";

export const fetchInit = (initData) => {
    return {
        type: FETCH_INIT_DATA,
        payload: initData
    }
}