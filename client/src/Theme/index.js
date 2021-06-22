import {createMuiTheme} from "@material-ui/core";

const white = "white";
const black = "#000000";
const darkGrey = "#424242";
const red = "#ff1744";
const orange = '#ffc400';
const blue = '#2979ff';

export const lightTheme = createMuiTheme({
    palette: {
        textColor: {
          default: black,
        },
        background: {
            default: white,
        },
    },
    secondary: {
        textColor: {
            default: black,
        },
        background: {
            default: white,
        },
    },
    button: {
        delete: red,
        edit: orange,
        add: blue,
    }
});

export const darkTheme = createMuiTheme({
    palette: {
        textColor: {
            default: white,
        },
        background: {
            default: darkGrey,
        },
    },
    secondary: {
        textColor: {
            default: black,
        },
        background: {
            default: white,
        },
    },
    button: {
        delete: red,
        edit: orange,
        add: blue,
    }
});