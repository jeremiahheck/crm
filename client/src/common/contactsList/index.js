import React from "react";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';
import Contact from "../contact";
import ContactBox from "../contactBox";

const ContactList = (props) => {
    const { contacts } = props;

     const renderContacts = () => {
         return contacts.map((contact) => {
            return(
                <ContactBox
                    children={
                        <Contact
                            id={contact.id}
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            email={contact.email}
                        />
                    }
                />
            )
         })
     }

    return (
        <Grid>
            {renderContacts(contacts)}
        </Grid>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(Object).isRequired,
}

ContactList.defaultProps = {
    contacts: [
        {
            id: 0,
            firstName: "ContactListemail0",
            lastName: "ContactListemail0",
            email: "ContactListemail0",
        },
        {
            id: 1,
            firstName: "ContactListemail1",
            lastName: "ContactListemail1",
            email: "ContactListemail1",
        }
    ],
}


export default ContactList;