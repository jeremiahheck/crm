import {API, DELETE, ROUTE_ADD_CONTACT} from "./routeConstants";

export const deleteRequest = (id) => {
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    fetch(`${API}${DELETE}/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    window.location.reload();
}

export const postRequest = (event, Contacts, contact) => {
    const contactJSON = JSON.stringify({
        "id": Contacts.size+1,
        "firstName": contact.firstName,
        "lastName": contact.lastName,
        "email": contact.email
    });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: contactJSON,
        redirect: 'follow'
    };
    fetch(`${API}${ROUTE_ADD_CONTACT}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    window.location.reload();
}