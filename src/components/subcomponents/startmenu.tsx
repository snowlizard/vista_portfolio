import * as React from 'react';
import { Box } from '@mui/material';

export const StartMenu = () => {
    return (
        <Box className='startMenu' id='start_menu'>
            <div className='programList'>
                <div className='programs'></div>
                <div className='searchBar'>
                    <input id='search__bar' type='text'
                    placeholder='Start Search'></input>
                </div>
            </div>
            <div className='placelist'></div>
        </Box>
    );
}