import * as React from "react";
import { Window } from "../subcomponents/window";

export const Notepad = () => {
    return (
        <Window title='Notepad'
        content={
            <iframe id="notepad" src='./notes/index.html'
            style={ {"border": "none"}}></iframe>
        }/>
    );
}