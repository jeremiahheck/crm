import React, {useState} from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../../Theme/styles";
import {deleteRequest, putRequest} from "../../utilitys";
import PropTypes from "prop-types";

const EditRow = (props) => {
    const { deleteButton, editButton, last, first, email, id} = props;
    const classes = useStyles();
    const [contact, setContact] = useState({
        id: id,
        firstName : first,
        lastName : last,
        email : email,
    });

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
                <Grid container spacing={1}>
                    <Grid item>
                        <TextField
                            name={"firstName"}
                            className={classes.inputField}
                            variant="filled"
                            defaultValue={first}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name={"lastName"}
                            className={classes.inputField}
                            variant="filled"
                            defaultValue={last}
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
            </Grid>
            <Grid item xs={4} container spacing={1}>
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
                    {editButton
                        ? <Button
                            className={classes.editButton}
                            children={"Edit"}
                            onClick={() => putRequest(contact)}
                        />
                        : <Button
                            className={classes.addButton}
                            children={"Add"}
                        />}
                </Grid>
            </Grid>
        </Grid>
    )
}

EditRow.propTypes = {
    deleteButton: PropTypes.bool,
    editButton: PropTypes.bool,
    addButton: PropTypes.bool,
    last: PropTypes.string,
    id: PropTypes.number,
    first: PropTypes.string,
    email: PropTypes.string,
}

export default EditRow;