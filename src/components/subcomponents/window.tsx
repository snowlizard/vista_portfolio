import * as React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { appIsOpen } from '../../redux/actions/appAction';
import close from '../../assets/ui/close.png';
import min from '../../assets/ui/minimize.png';
import max from '../../assets/ui/maximize.png';

type windowProps = {
    content?: React.ReactNode
    title?: string
}


export const Window: React.FC<windowProps> = ({content, title}) => {
    const dispatch = useDispatch();

    const handleCloseApp = (appName: string) => {
        dispatch(appIsOpen({name: appName, open: false}));
    }
    
    return (
        <Draggable bounds="parent" handle='#dragStrip'>
            <div className='window'>
                <div id='dragStrip'>
                    <div className='windowTitle' >{title}</div>
                    <div id='windowButtons'>
                        <img id='minIcon' src={min}></img>
                        <img id='maxIcon' src={max}></img>
                        <img id='closeIcon' src={close}
                        onClick={ () => handleCloseApp(title)}></img>
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