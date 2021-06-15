import {BASE_URI, ROUTE_CONTACTS_SCREEN} from "../../routeConstants";

export default function* contactsSaga() {
    if (window.location.href === `${BASE_URI}${ROUTE_CONTACTS_SCREEN}`) {
        fetch(`http://localhost:8080/api/contacts`)
            .then(response => response.json())
            .then(data => console.log(data));
    }
}