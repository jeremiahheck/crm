import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Provider} from "react-redux";
import createStore from "./redux/store";

const { store, history } = createStore();


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <CssBaseline />
            <App history={history}/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

