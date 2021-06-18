import React from "react";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';

const Contact = (props) => {
    const { firstName, lastName, email} = props;
    return (
      <Grid container justify={"center"} align={"center"}>
          <table>
              <Grid xs={12}>
                  <tbody>
                      <tr>{firstName}</tr>
                      <tr>{lastName}</tr>
                      <tr>{email}</tr>
                  </tbody>
              </Grid>
          </table>
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