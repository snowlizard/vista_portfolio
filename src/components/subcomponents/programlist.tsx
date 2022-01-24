import * as React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

export const Programlist = () => {
    const Apps = useSelector( (state: RootStateOrAny) => state.apps)

    return (
        <div className='programs_list'>
            {
                Apps.map( (app: any) => {
                    if(app.type === 'startmenu')
                    return (
                        <div className='program' key={app.name}>
                            <img className='programIcons' src={app.icon}></img>
                            <span className='programTitle'>{app.name}</span>
                        </div>
                    );
                })
            }
        </div>
    );
}