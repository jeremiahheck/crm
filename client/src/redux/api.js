import {API, ROUTE_ADD_CONTACT, ROUTE_CONTACTS_SCREEN} from "../routeConstants";

export function fetchContactsAPI() {
    return new Promise(function(resolve,reject) {
        const url = `${API}${ROUTE_CONTACTS_SCREEN}`;
        const options = {
            method: 'GET',
        }
        fetch(url, options)
            .then((res) => {return res.json()})
            .then((response) => {
                resolve(response)
            })
            .catch(error => console.log(error))
    })
}