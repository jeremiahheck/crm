import React from "react";
import ContactList from "../../common/contactsList";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import {ROUTE_ADD_CONTACT} from "../../Routes";
import { connect } from 'react-redux';

const ContactsScreen = (props) => {
    const {contacts} = props;
    const history = useHistory();

    return (
        <Grid>
            <Button
                children={"Add Contact"}
                onClick={() =>
                {history.push(ROUTE_ADD_CONTACT)}}
            />

            <ContactList contacts={contacts}/>
        </Grid>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contact.Contacts
    };
}


export default connect(mapStateToProps)(ContactsScreen)