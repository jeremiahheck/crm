import React, {useState} from "react";
import {ROUTE_CONTACTS_SCREEN, ROUTE_ADD_CONTACT, HOME, API} from "../../../routeConstants";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const AddContactForm = (props) => {
    const {Contacts} = props;
    const history = useHistory();
    const [contact, setContact] = useState({
        firstName : "post",
        lastName : "post",
        email : "post",
    });
    const handleSubmit = (event) => {
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
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    };


    return (
        <Grid>
            <h1>
                Add Contacts Form.
            </h1>

            <form onSubmit={() => handleSubmit()}>
                <label>
                    First Name:
                    <input type="text" name={"firstName"} value={contact.firstName} onChange={handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name={"lastName"} value={contact.lastName} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" name={"email"} value={contact.email} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <Button
                children={"Back to Contacts Screen"}
                onClick={() =>
                {history.push(ROUTE_CONTACTS_SCREEN)}}
            />
            <Button
                children={"Main Screen"}
                onClick={() =>
                {history.push(HOME)}}
            />
        </Grid>
    )
}

AddContactForm.propTypes = {
    Contacts: PropTypes.array,
}

function mapStateToProps(state) {
    return {
        Contacts: state.contact.Contacts
    };
}

export default connect(mapStateToProps)(AddContactForm);
