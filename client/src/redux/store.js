import {applyMiddleware, createStore as createReduxStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './sagas';
import createRootReducer from "./reducer";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
// ========================================

//const store = configureStore({reducer: allReducers})
//export default store

export default function createStore(preloadedState) {
    const history = createBrowserHistory();

    const sagaMiddleWare = createSagaMiddleware();

    const rootReducer = createRootReducer(history);

    const middleware = [
        routerMiddleware(history),
        sagaMiddleWare,
    ]

    const store = createReduxStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware)),
    )

    sagaMiddleWare.run(rootSaga);

    return { store, history };

}