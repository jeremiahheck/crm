import React from "react";
import {Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../../Theme/styles";

const EditRow = (props) => {
    const { last, first, email} = props;
    const classes = useStyles();
    return (
        <div>
            <TextField
                className={classes.inputField}
                label={`First Name`}
                variant="filled"
                defaultValue={first}
            />
            <TextField
                className={classes.inputField}
                label={`Last name`}
                variant="filled"
                defaultValue={last}
            />
            <TextField
                className={classes.inputField}
                label={`Email`}
                variant="filled"
                defaultValue={email}
            />
        </div>
    )
}

export default EditRow;