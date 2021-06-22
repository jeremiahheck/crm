import React, {useState} from "react";
import {deleteRequest, postRequest} from "../../../utilitys";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
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
    const [error, setError] = useState(false);



    const handleSubmit = (event) => {
        if (contact.firstName  === "" || contact.email === "" || contact.lastName === "" ) {
            setError(true)
        }  else {
            postRequest(event, Contacts, contact);
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
        if (contact.firstName !== "" || contact.email !== "" || contact.lastName !== "" ) {
            setError(false)
        }
    };


    return (
        <Grid wrap="nowrap" container align={"center"} >
            <Grid  item xs={8}>
                <Row
                    children={
                        <Grid container spacing={1}>
                            <Grid item>
                                <TextField
                                    required
                                    value={contact.firstName}
                                    type="text"
                                    className={classes.inputField}
                                    label={`First Name`}
                                    variant="filled"
                                    name={"firstName"}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    value={contact.lastName}
                                    type="text"
                                    className={classes.inputField}
                                    label={`Last Name`}
                                    variant="filled"
                                    name={"lastName"}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    value={contact.email}
                                    type="text"
                                    className={classes.inputField}
                                    label={`Email`}
                                    variant="filled"
                                    name={"email"}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    }/>
            </Grid>
            <Grid item xs={4} container spacing={1}>
                <Grid item>
                    <Button
                        className={error ? classes.addButtonError : classes.addButton}
                        children={"Add"}
                        onClick={() => handleSubmit()}
                    />
                    <Typography className={!error && classes.hide} children={`Please fill in each entry!`}/>
                </Grid>
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
