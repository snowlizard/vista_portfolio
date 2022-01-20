import * as React from 'react';
import Draggable from 'react-draggable';

type windowProps = {
    content?: React.ReactNode
    title?: string
}


export const Window: React.FC<windowProps> = ({content, title}) => {
    
    return (
        <Draggable bounds="parent" handle='#dragStrip'>
            <div className='window'>
                <div id='dragStrip'>
                    <div className='windowTitle' >{title}</div>
                </div>
                <div className='windowBackground'></div>
                <div className='windowContents'>
                    {
                        content
                    }
                </div>
            </div>
        </Draggable>
    );
}