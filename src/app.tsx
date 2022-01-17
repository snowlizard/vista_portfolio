import * as React from "react";
import * as ReactDOM from "react-dom";
import { Bootloader } from "./components/bootloader";
import { Desktop } from "./components/desktop";

const css = require('./styles/styles.css');

const App = () => {
    const [booted, setBooted] = React.useState(false);

    return (
        <div>
            <Bootloader />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));