import React from "react";
import {Grid, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import EditRow from "../editRow";
import Row from "../row";

const Contact = (props) => {
    const { firstName, lastName, email, id} = props;
    return (
          <Row
            children={
                <EditRow
                    id={id}
                    first={firstName}
                    last={lastName}
                    email={email}
                    addButton={false}
                    editButton={true}
                    deleteButton={true}
                />
            }
          />
    );
}

Contact.prototype = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

Contact.defaultProps = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
}

export default Contact;