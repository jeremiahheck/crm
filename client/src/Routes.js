import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Main from "./screens/Main";
import {ConnectedRouter} from "connected-react-router";
import PropTypes from 'prop-types';
import ContactsScreen from "./screens/ContactsScreen/contactsScreen";
import AddContactForm from "./forms/ContactForms/addContactsForm";
import {
    HOME,
    ROUTE_CONTACTS_SCREEN,
    ROUTE_ADD_CONTACT,
    DELETE_CONTACT_ROUTE,
} from "./routeConstants";

function Router({history, loggedIn}) {
    return (
        <ConnectedRouter history={history}>
            <BrowserRouter>
                {loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <Redirect to={ROUTE_CONTACTS_SCREEN}/>
                        </Route>
                        <Route path={ROUTE_CONTACTS_SCREEN}>
                            <ContactsScreen/>
                        </Route>
                        {/*<Route path={ROUTE_ADD_CONTACT}>*/}
                        {/*    <AddContactForm/>*/}
                        {/*</Route>*/}
                        <Route path="/">
                            <Redirect to={ROUTE_CONTACTS_SCREEN}/>
                        </Route>
                    </Switch>
                )}
                {!loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <Redirect to={ROUTE_CONTACTS_SCREEN}/>
                        </Route>
                        <Route path={ROUTE_CONTACTS_SCREEN}>
                            <ContactsScreen/>
                        </Route>
                        {/*<Route path={ROUTE_ADD_CONTACT}>*/}
                        {/*    <AddContactForm/>*/}
                        {/*</Route>*/}
                        <Route path="/">
                            <Redirect to={ROUTE_CONTACTS_SCREEN}/>
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