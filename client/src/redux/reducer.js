import {combineReducers} from "redux";
import contactsReducer from "./contacts/contactsReducer";
import {connectRouter} from "connected-react-router";
import initReducer from "../init/reducer";

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        init: initReducer,
        contact: contactsReducer
    });
}
