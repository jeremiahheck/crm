import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    main: {
        height: `100vh`,
        width: `100vw`,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.textColor.default,
    },
    inputField: {
        backgroundColor: theme.secondary.background.default,
        color: theme.secondary.textColor.default,
        margin: `0`,
        padding: `0`,
    },
    deleteButton : {
        width: `75px`,
        height: `50px`,
        backgroundColor: theme.button.delete,
    },
    editButton : {
        width: `75px`,
        height: `50px`,
        backgroundColor: theme.button.edit,
    },
    addButton : {
        width: `75px`,
        height: `50px`,
        backgroundColor: theme.button.add,
    },
    row: {
       borderColor: theme.palette.background.default,
    },
    box :{
        border: `1px`,
        borderColor: theme.palette.background.default,
    }
}));