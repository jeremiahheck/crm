import React from "react";
import {Button, Grid} from "@material-ui/core";
import {ROUTE_CONTACTS_SCREEN} from "../../routeConstants";
import {useHistory} from "react-router";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {fetchInit} from "../../init/actions";
import {useStyles} from "../../Theme/styles";

const Main = (props) => {
    const { loading, name } = props;
    const history = useHistory();
    const classes = useStyles();

    return (
      <Grid container className={classes.main}>
          <h2>
              {/*{loading ? {name} : "Nothing Loaded :("}*/}
          </h2>
          <h1>This is the Main Screen.</h1>
          <Button
              children={"Contacts Screen"}
              onClick={() =>
              {history.push(ROUTE_CONTACTS_SCREEN)}}
          />
      </Grid>
    );
}


Main.prototype = {
    name: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchInit: PropTypes.func.isRequired,
}

Main.defaultProps = {
    name: null,
    loading: false,
    fetchInit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    name: state.name,
});

const mapDispatchToProps = (dispatch) => ({
    fetchInit: (payload) => dispatch(fetchInit(payload)), //response from saga
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);