import React, {useState} from "react";
import {deleteRequest, postRequest} from "../../../utilitys";
import {Button, Grid, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useStyles} from "../../../Theme/styles";
import Row from "../../../common/row";

const AddContactForm = (props) => {
    const classes = useStyles()
    const {Contacts} = props;
    const [contact, setContact] = useState({
        firstName : "",
        lastName : "",
        email : "",
    });

    const handleSubmit = (event) => {
        postRequest(event, Contacts, contact);
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
        <Grid wrap="nowrap" container align={"center"} >
            <Grid  item xs={8}>
                <Row
                    children={
                        <div>
                            <TextField
                                value={contact.firstName}
                                type="text"
                                className={classes.inputField}
                                label={`First Name`}
                                variant="filled"
                                name={"firstName"}
                                onChange={handleChange}
                            />
                            <TextField
                                value={contact.lastName}
                                type="text"
                                className={classes.inputField}
                                label={`Last Name`}
                                variant="filled"
                                name={"lastName"}
                                onChange={handleChange}
                            />
                            <TextField
                                value={contact.email}
                                type="text"
                                className={classes.inputField}
                                label={`Email`}
                                variant="filled"
                                name={"email"}
                                onChange={handleChange}
                            />
                        </div>
                    }/>
            </Grid>
            <Grid item xs={4} container spacing={1}>
                <Button
                    className={classes.addButton}
                    children={"Add"}
                    onClick={() => handleSubmit()}
                />
            </Grid>
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
