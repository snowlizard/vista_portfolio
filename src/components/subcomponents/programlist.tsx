import * as React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import mail from '../../assets/ui/icons/mail.png';
import msn from '../../assets/ui/icons/msn.png';
import notepad from '../../assets/ui/icons/notepad.png';

interface obj {
    [key: string] : any
}

export const Programlist = () => {
    const programs: obj = {
        'mail': mail,
        'msn' : msn,
        'notepad' : notepad
    };

    const keys = Object.keys(programs);

    return (
        <List className='progams_list'>
            <div className='programIconsContainer'>
            {
                keys.map( program => {
                    return (
                        <img key={programs[program]} className='programIcons' src={programs[program]}></img>
                    );
                })
            }
            </div>

            {
                keys.map( llave => {
                    return (
                        <ListItemButton key={llave}>
                            <ListItemText  primary={llave}/>
                        </ListItemButton>
                    );
                })
            }
        </List>
    );
}

// had to do some weird ugly work around to get past the fact
// that mui lists only work with svg images.