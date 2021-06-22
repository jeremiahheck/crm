import Router from "./Routes";
import {connect} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import {lightTheme, darkTheme} from "./Theme";




function App(props) {
    const {history, initTheme} = props;
    return (
        <MuiThemeProvider
            theme={initTheme === "Light"
            ? lightTheme
            : darkTheme}>
                <Router history={history}/>
        </MuiThemeProvider>
  );
}


function mapStateToProps(state) {
    return {
        initTheme: state.init.theme,
    };
}

export default connect(mapStateToProps)(App);
