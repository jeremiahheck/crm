import {API, DELETE_CONTACT_ROUTE, ROUTE_ADD_CONTACT, UPDATE_CONTACT_ROUTE} from "./routeConstants";

export const deleteRequest = (id) => {
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    const url = `${API}${DELETE_CONTACT_ROUTE}/${id}`
    fetch(url, requestOptions)
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

export const putRequest = (contact) => {
    const contactJSON = JSON.stringify({
        "id": contact.id,
        "firstName": contact.firstName,
        "lastName": contact.lastName,
        "email": contact.email
    });
    let  myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: contactJSON,
        redirect: 'follow'
    };
    const url = `${API}${UPDATE_CONTACT_ROUTE}/${contact.id}`;
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    window.location.reload();

}