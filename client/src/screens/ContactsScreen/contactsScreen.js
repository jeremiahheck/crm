import React from "react";
import ContactList from "../../common/contactsList";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import {HOME, ROUTE_ADD_CONTACT} from "../../routeConstants";
import { connect } from 'react-redux';
import reloadPage from "../../utilitys";

const ContactsScreen = (props) => {
    const {contacts} = props;
    const history = useHistory();
    console.log(contacts);
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

function mapStateToProps(state) {
    return {
        contacts: state.contact.Contacts
    };
}


export default connect(mapStateToProps)(ContactsScreen)