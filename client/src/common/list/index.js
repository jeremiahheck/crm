import React from "react";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';

const List = (props) => {
    const { list, renderComponent} = props;

    return (
        <Grid>
            {renderComponent(list)}
        </Grid>
    );
}

List.propTypes = {
    list: PropTypes.arrayOf(Object).isRequired,
    renderComponent: PropTypes.func.isRequired,
}



export default List;