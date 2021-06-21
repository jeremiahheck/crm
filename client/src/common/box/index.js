import React from "react";
import {Button, Grid} from "@material-ui/core";
import {DELETE, API} from "../../routeConstants";
import PropTypes from "prop-types";

const Box = (props) => {
    const { children } = props;

    const deleteRequest = (id) => {
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        fetch(`${API}${DELETE}/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        window.location.reload();
    }

    return (
        <Grid container align={"center"} >
            <Grid item xs={8}>
                {children}
            </Grid>
            <Grid item xs={4}>
                <Button
                children={"Edit"}
                >
                </Button>
                <Button
                    children={"Delete"}
                    onClick={() => deleteRequest(children.props.id)}
                >
                </Button>
            </Grid>
        </Grid>
    )
}

Box.prototype = {
    children: PropTypes.object.isRequired,
}

export default Box;