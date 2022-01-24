import * as React from 'react';
import { Window } from '../subcomponents/window';


export const Msn = () => {
    return (
        <Window title='Msn'
        content={
            <iframe className='memeFrame' src='./memespace/index.html'
            style={ {"border": "none"}}></iframe>
        }/>
    );
}