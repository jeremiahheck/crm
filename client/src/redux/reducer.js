import {combineReducers} from "redux";
import contactReducer from "./contacts/contactReducer";
import {connectRouter} from "connected-react-router";

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        contact: contactReducer
    });
}
