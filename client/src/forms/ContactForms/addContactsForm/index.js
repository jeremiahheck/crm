import React, {useState} from "react";
import {ROUTE_ADD_CONTACT, API} from "../../../routeConstants";
import {Button, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const AddContactForm = (props) => {
    const {Contacts} = props;
    const [contact, setContact] = useState({
        firstName : "",
        lastName : "",
        email : "",
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
        window.location.reload();
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
