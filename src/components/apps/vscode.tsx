import * as React from 'react';
import { Window } from '../subcomponents/window';

export const Vscode = () => {
    return (
        <Window title='VS Code'
        content={
            <iframe id='vscode' src='https://github1s.com/snowlizard/vista_portfolio'></iframe>
        }/>
    );
}

// credit Github1s
// https://github.com/conwnet/github1s