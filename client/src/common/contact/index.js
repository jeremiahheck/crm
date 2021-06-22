import React from "react";
import {Grid, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import EditRow from "../editRow";
import Row from "../row";

const Contact = (props) => {
    const { firstName, lastName, email} = props;
    return (
      <Grid container justify={"center"} align={"center"}>
          <Row
            children={
                <EditRow
                    first={firstName}
                    last={lastName}
                    email={email}
                />
            }
          />
      </Grid>
    );
}

Contact.prototype = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

Contact.defaultProps = {
    id: 0,
    firstName: "ContactDefault",
    lastName: "ContactDefault",
    email: "ContactDefault",
}

export default Contact;