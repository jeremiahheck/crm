import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    main: {
        height: `100vh`,
        width: `100vw`,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.textColor.default,
    },

}));