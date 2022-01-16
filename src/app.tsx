import * as React from "react";
import * as ReactDOM from "react-dom";
import { Bootloader } from "./components/bootloader";
const css = require('./styles/styles.css');

const App = () => {
    return (
        <div>
            <Bootloader />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));