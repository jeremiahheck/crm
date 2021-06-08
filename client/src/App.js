import createStore from "./redux/store";
import Router from "./Routes";
import {Provider} from "react-redux";

const { store, history } = createStore();

function App() {
  return (
      <Provider store={store}>
          <Router history={history}/>
      </Provider>
  );
}

export default App;
