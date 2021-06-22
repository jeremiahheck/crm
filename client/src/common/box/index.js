import React from "react";
import {Button, Grid} from "@material-ui/core";
import PropTypes from "prop-types";
import {useStyles} from "../../Theme/styles";
import {deleteRequest, putRequest} from "../../utilitys";

const Box = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.box}>
            {children}
        </Grid>
    )
}

Box.propTypes = {
    children: PropTypes.object.isRequired,
}

export default Box;