import {combineReducers} from "redux";
import contactReducer from "./contacts/contactReducer";
import {connectRouter} from "connected-react-router";
import initReducer from "../init/reducer";

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        init: initReducer,
        contact: contactReducer
    });
}
