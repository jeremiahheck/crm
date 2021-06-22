import React, {useEffect, useState} from "react";
import List from "../../common/list";
import {Grid, Switch} from "@material-ui/core";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Box from "../../common/box";
import Contact from "../../common/contact";
import AddContactForm from "../../forms/ContactForms/addContactsForm";
import {useStyles} from "../../Theme/styles";
import {changeTheme} from "../../init/actions";


const ContactsScreen = (props) => {
    const classes = useStyles();
    const {returnedContacts, formCount, changeTheme, theme} = props;
    const [contacts, setContacts] = useState([{}]);
    const [showForm, setShowForm] = useState(formCount);
    const items = []

    for(let i = 0;i < showForm; ++i) {
        items.push(<AddContactForm/>);
    }

    useEffect(() => {
        setContacts(returnedContacts);
    })

    const handleThemeChange = () => {
        if (theme === "Light") {
            changeTheme("Dark");
        } else {
            changeTheme("Light");
        }
    }

    return (
        <Grid className={classes.main} container align={"center"}>
            <Grid item xs={12}>
                <h2>Existing Contacts</h2>
                <List
                    list={contacts}
                    renderComponent={
                        (list) => {
                            return list.map((list) => {
                                return(
                                    <Box
                                        key={list.id}
                                        children={
                                            <Contact
                                                editButton={true}
                                                deleteButton={true}
                                                id={list.id}
                                                firstName={list.firstName}
                                                lastName={list.lastName}
                                                email={list.email}
                                            />
                                        }
                                    />
                                )
                            })
                        }
                    }
                />
                <h2>Add a contact</h2>
                <Box
                    children={items}
                />
                <h2>Switch to dark mode below!</h2>
                <Switch
                    color="default"
                    checked={localStorage.getItem("theme") === "Dark" && true}
                    onChange={() => {handleThemeChange()}}
                    name={`Change Theme`}
                />
            </Grid>

        </Grid>
    )
}

ContactsScreen.propTypes = {
    returnedContacts: PropTypes.array,
    formCount: PropTypes.number.isRequired,
    theme: PropTypes.string,
}

ContactsScreen.defaultProps = {
    formCount: 1,
    theme: null,
}

function mapStateToProps(state) {
    return {
        returnedContacts: state.contact.Contacts,
        theme: state.init.theme,
    };
}

const mapDispatchToProps = {
    changeTheme
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen)