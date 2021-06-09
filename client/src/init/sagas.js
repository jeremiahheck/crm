export default function* initSaga() {
    fetch(`http://localhost:8080/api/contacts`)
        .then(response => response.json())
        .then(data => console.log(data));
}