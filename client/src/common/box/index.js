import React from "react";
import {Button, Grid} from "@material-ui/core";
import PropTypes from "prop-types";
import {useStyles} from "../../Theme/styles";
import {deleteRequest, postRequest} from "../../utilitys";

const Box = (props) => {
    const { deleteButton, editButton, addButton, children } = props;
    const classes = useStyles();

    return (
        <Grid wrap="nowrap" container align={"center"} >
            <Grid  item xs={8}>
                {children}
            </Grid>
            <Grid item xs={4} container spacing={1}>
                <Grid item >
                    {deleteButton &&
                    <Button
                        className={classes.deleteButton}
                        children={"Delete"}
                        onClick={() => deleteRequest(children.props.id)}
                    />
                    }
                </Grid>
                <Grid item >
                    {editButton &&
                    <Button
                        className={classes.editButton}
                        children={"Edit"}
                    />
                    }
                </Grid>
                <Grid item >
                    {addButton &&
                    <Button
                        className={classes.addButton}
                        children={"Add"}
                        onClick={() => postRequest(children.props)}
                    />
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

Box.prototype = {
    children: PropTypes.object.isRequired,
    editButton: PropTypes.bool.isRequired,
    deleteButton: PropTypes.bool.isRequired,
    addButton: PropTypes.bool.isRequired,
}

export default Box;