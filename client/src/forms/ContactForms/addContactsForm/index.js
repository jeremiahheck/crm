import React, {useState} from "react";
import {ROUTE_CONTACTS_SCREEN, HOME} from "../../../routeConstants";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import {connect} from "react-redux";
import {addContact} from "../../../redux/contacts/contactsActions";
import {bindActionCreators} from "redux";

const AddContactForm = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        const contact = [
            firstName,
            lastName,
            email,
        ]
        alert('A name was submitted' + firstName + lastName + email);
        addContact(contact);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <Grid>
            <h1>
                Add Contacts Form.
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleEmailChange} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: dispatch(addContact())
        //addContact: (contact) => dispatch(addContact()),

    }
}

export default connect( null, mapDispatchToProps)(AddContactForm);
