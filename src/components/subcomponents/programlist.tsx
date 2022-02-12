import * as React from 'react';
import { appIsOpen } from '../../redux/actions/appAction';
import { startMenuIsOpen } from '../../redux/actions/startMenuAction';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';

export const Programlist = () => {
    const Apps = useSelector( (state: RootStateOrAny) => state.apps);
    const dispatch = useDispatch();

    const handleClick = (app: string) => {
        dispatch(appIsOpen({name: app, open: true}));
        dispatch(startMenuIsOpen(false));
    }

    return (
        <div className='programs_list'>
            {
                Apps.map( (app: any) => {
                    if(app.type === 'startmenu')
                    return (
                        <div className='program' key={app.name} 
                        onClick={ () => handleClick(app.name) }>
                            <img className='programIcons' src={app.icon}></img>
                            <span className='programTitle'>{app.name}</span>
                        </div>
                    );
                })
            }
        </div>
    );
}