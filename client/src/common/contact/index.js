import React from "react";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';

const Contact = (props) => {
    const { firstName, lastName, email} = props;
    return (
      <Grid>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h1>{email}</h1>
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