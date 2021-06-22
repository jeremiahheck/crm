import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    main: {
        height: `100vh`,
        width: `100vw`,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.textColor.default,
    },
    inputField: {
        border: `1px solid ${theme.button.add.blue} `,
        backgroundColor: theme.secondary.background.default,
        color: theme.secondary.textColor.default,
    },
    inputFieldFilled: {
        border: `1px solid ${theme.palette.textColor.default} `,
        backgroundColor: theme.secondary.background.default,
        color: theme.secondary.textColor.default,
    },
    deleteButton : {
        width: `75px`,
        height: `56px`,
        backgroundColor: theme.button.delete,
    },
    editButton : {
        width: `75px`,
        height: `56px`,
        backgroundColor: theme.button.edit,
    },
    addButton : {
        width: `75px`,
        height: `56px`,
        backgroundColor: theme.button.add,
    },
    addButtonError : {
        width: `75px`,
        height: `56px`,
        border: `3px solid ${theme.button.delete}`,
        backgroundColor: theme.button.add,
    },
    row: {
       padding: `5px`,
       borderColor: theme.palette.background.default,
    },
    box :{
        border: `1px`,
        borderColor: theme.palette.background.default,
    },
    hide: {
      visibility: `hidden`,
    }
}));