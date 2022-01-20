import * as React from 'react';
import Draggable from 'react-draggable';

export const About = () => {
    return (
        <Draggable bounds="parent" handle='#dragStrip'>
            <div className='window'>
                <div id='dragStrip'></div>
                <div className='windowBackground'></div>
                <div className='windowContents'>
                    
                </div>
            </div>
        </Draggable>
    );
}