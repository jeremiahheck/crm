import React, {useState} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import PropTypes from 'prop-types';
import Row from "../row";
import {deleteRequest, putRequest} from "../../utilitys";
import {useStyles} from "../../Theme/styles";

const Contact = (props) => {
    const { deleteButton, editButton, lastName, firstName, email, id} = props;
    const classes = useStyles();
    const [button, setButton] = useState( editButton );
    const [contact, setContact] = useState({
        id: id,
        firstName : firstName,
        lastName : lastName,
        email : email,
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
        setButton(!editButton)
    };

    return (
        <Grid container align={"center"} >
            <Grid item xs={8}>
                <Row
                    children={
                        <Grid container spacing={1}>
                            <Grid item>
                                <TextField
                                    name={"firstName"}
                                    className={classes.inputField}
                                    variant="filled"
                                    defaultValue={firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name={"lastName"}
                                    className={classes.inputField}
                                    variant="filled"
                                    defaultValue={lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name={"email"}
                                    className={classes.inputField}
                                    variant="filled"
                                    defaultValue={email}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    }
                />
            </Grid>
            <Grid  item xs={4} container spacing={1}>
                <Grid item >
                    {deleteButton &&
                    <Button
                        className={classes.deleteButton}
                        children={"Delete"}
                        onClick={() => deleteRequest(id)}
                    />
                    }
                </Grid>
                <Grid item >
                    {button
                        ? <Button
                            className={classes.editButton}
                            children={"Edit"}
                        />
                        : <Button
                            className={classes.addButton}
                            children={"Save"}
                            onClick={() => putRequest(contact)}
                        />}
                </Grid>
            </Grid>
        </Grid>
    );
}

Contact.prototype = {
    deleteButton: PropTypes.bool,
    editButton: PropTypes.bool,
    addButton: PropTypes.bool,
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

Contact.defaultProps = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
}

export default Contact;