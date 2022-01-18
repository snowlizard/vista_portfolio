import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Purgatory } from "./components/purgatory";

const css = require('./styles/styles.css');

const App = () => {

    return (
        <Provider store={store}>
            <Purgatory />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));