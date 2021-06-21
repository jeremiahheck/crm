import React, {useEffect, useState} from "react";
import ContactList from "../../common/contactsList";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import {HOME, ROUTE_ADD_CONTACT} from "../../routeConstants";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const ContactsScreen = (props) => {
    const {returnedContacts} = props;
    const [contacts, setContacts] = useState([{}]);
    const history = useHistory();

    useEffect(() => {
        setContacts(returnedContacts);
    })

    return (
        <Grid>
            <ContactList contacts={contacts}/>
            <Button
                children={"Add Contact"}
                onClick={() =>
                {history.push(ROUTE_ADD_CONTACT)}}
            />
            <Button
                children={"Main Screen"}
                onClick={() =>
                {history.push(HOME)}}
            />
        </Grid>
    )
}

ContactsScreen.propTypes = {
    returnedContacts: PropTypes.array,
}

function mapStateToProps(state) {
    return {
        returnedContacts: state.contact.Contacts
    };
}

export default connect(mapStateToProps)(ContactsScreen)