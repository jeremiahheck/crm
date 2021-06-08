import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./screens/Main";
import {ConnectedRouter} from "connected-react-router";
import PropTypes from 'prop-types';
import ContactsScreen from "./screens/ContactsScreen/contactsScreen";
import AddContactForm from "./forms/ContactForms/addContactsForm";


export const HOME = "/home";
export const ROUTE_CONTACTS_SCREEN = "/contacts";
export const ROUTE_ADD_CONTACT = "/add";


function Router({history, loggedIn}) {
    return (
        <ConnectedRouter history={history}>
            <BrowserRouter>
                {loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <Main/>
                        </Route>
                        <Route path={ROUTE_CONTACTS_SCREEN}>
                            <ContactsScreen/>
                        </Route>
                        <Route path={ROUTE_ADD_CONTACT}>
                            <AddContactForm/>
                        </Route>
                    </Switch>
                )}
                {!loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <Main/>
                        </Route>
                        <Route path={ROUTE_CONTACTS_SCREEN}>
                            <ContactsScreen/>
                        </Route>
                        <Route path={ROUTE_ADD_CONTACT}>
                            <AddContactForm/>
                        </Route>
                    </Switch>
                )}
            </BrowserRouter>
        </ConnectedRouter>
    );
}

Router.propTypes = {
    history: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool,
};

Router.defaultProps = {
    loggedIn: false,
};

export default Router;