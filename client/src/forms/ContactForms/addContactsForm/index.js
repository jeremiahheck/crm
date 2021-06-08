import React from "react";
import {ROUTE_CONTACTS_SCREEN, HOME} from "../../../routeConstants";
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router";

const AddContactForm = () => {
    const history = useHistory();

    return (
        <Grid>
            <h1>
                Add Contacts Form.
            </h1>
            <Button
                children={"Back to Contacts Screen"}
                onClick={() =>
                {history.push(ROUTE_CONTACTS_SCREEN)}}
            />
            <Button
                children={"Main Screen"}
                onClick={() =>
                {history.push(HOME)}}
            />
        </Grid>
    )
}

export default AddContactForm;