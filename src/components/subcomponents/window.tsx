import * as React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { appIsOpen } from '../../redux/actions/appAction';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type windowProps = {
    content?: React.ReactNode
    title?: string,
    idname?: string
}


export const Window: React.FC<windowProps> = ({content, title, idname='default'}) => {
    const dispatch = useDispatch();

    const handleCloseApp = (appName: string) => {
        dispatch(appIsOpen({name: appName, open: false}));
    }
    
    return (
        <Draggable bounds="parent" handle='#dragStrip'>
            <div className='window' id={idname}>
                <div id='dragStrip'>
                    <div className='windowTitle' >{title}</div>
                    <div id='windowButtons'>
                        <IconButton
                        id='closeIcon'
                        onClick={ () => handleCloseApp(title)}>
                            <CloseIcon/>
                        </IconButton>
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