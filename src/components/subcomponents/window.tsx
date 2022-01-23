import * as React from 'react';
import Draggable from 'react-draggable';
import close from '../../assets/ui/close.png';
import min from '../../assets/ui/minimize.png';
import max from '../../assets/ui/maximize.png';

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
                    <div id='windowButtons'>
                        <img id='minIcon' src={min}></img>
                        <img id='maxIcon' src={max}></img>
                        <img id='closeIcon' src={close}></img>
                    </div>
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