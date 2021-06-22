import React from "react";
import {useStyles} from "../../Theme/styles";

const Row = (props) => {
    const classes = useStyles()
    const { children } = props;
    return  (
        <td className={classes.row}>
            {children}
        </td>
    )
}

export default Row;