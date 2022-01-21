import * as React from 'react';
import mail from '../../assets/ui/icons/mail.png';
import msn from '../../assets/ui/icons/msn.png';
import notepad from '../../assets/ui/icons/notepad.png';

interface obj {
    [key: string] : any
}

export const Programlist = () => {
    const programs: obj = {
        'Mail': mail,
        'Msn' : msn,
        'Notepad' : notepad
    };

    const keys = Object.keys(programs);

    return (
        <div className='programs_list'>
            {
                keys.map( llave => {
                    return (
                        <div className='program' key={llave}>
                            <img className='programIcons' src={programs[llave]}></img>
                            <span className='programTitle'>{llave}</span>
                        </div>
                    );
                })
            }
        </div>
    );
}

// llave is spanish for key