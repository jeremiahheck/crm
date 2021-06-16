import {API, ROUTE_CONTACTS_SCREEN} from "../routeConstants";

export class ContactsAPI {
    fetchData = () => {
        return new Promise(function(resolve,reject) {
            const url = `${API}${ROUTE_CONTACTS_SCREEN}`;
            const options = {
                method: 'GET',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
            }
            fetch(url, options)
                .then((res) => {return res.json()})
                .then((response) => {
                    resolve(response)
                })
                .catch(error => console.log(error))
        })
    }
}