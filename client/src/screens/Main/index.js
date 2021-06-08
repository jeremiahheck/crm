import React from "react";
import {Button, Grid} from "@material-ui/core";
import {HOME, ROUTE_CONTACTS_SCREEN} from "../../routeConstants";
import {useHistory} from "react-router";

const Main = () => {
    const history = useHistory();
    return (
      <Grid>
          <h1>This is the Main Screen.</h1>
          <Button
              children={"Contacts Screen"}
              onClick={() =>
              {history.push(ROUTE_CONTACTS_SCREEN)}}
          />
      </Grid>
    );
}

export default Main;