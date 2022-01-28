import * as React from 'react';
import { Window } from '../subcomponents/window';


export const Cards = () => {
    return (
        <Window title='Cards'
        content={
            <iframe src='./cards/index.html'
            style={ {"border": "none",
            "overflow": "auto"} }></iframe>
        }/>
    );
}