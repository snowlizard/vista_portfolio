import * as React from 'react';
import { Box, Divider } from '@mui/material';
import { Programlist } from './programlist';
import userFrame from '../../assets/ui/UserFrame.png';
import userPicture from '../../assets/ui/user_picture.jpg';
import searchIcon from '../../assets/ui/searchicon.png';

export const StartMenu = () => {
    return (
        <Box className='startMenu' id='start_menu'>
            <div className='programList'>
                <div className='programs'>
                    <Programlist />
                </div>
                <div className='searchBar'>
                    <input id='search__bar' type='text'
                    placeholder='Start Search'></input>
                    <img id='searchIcon' src={searchIcon}></img>
                </div>
            </div>
            <div className='placelist'>
                <div id='rightTop'>
                    <img className='userFrame' src={userFrame}></img>
                    <img id='userPic' src={userPicture}></img>
                </div>

                <span className='placelist_text' >Julian</span>
                <span className="placelist_text">Documents</span>
                <span className="placelist_text">Pictures</span>
                <span className="placelist_text">Music</span>
                <span className="placelist_text">Videos</span>
                <Divider className='placelist_divider' variant='middle'/>
                <span className="placelist_text">Games</span>
                <span className="placelist_text">Computer</span>
                <Divider className='placelist_divider' variant='middle'/>
                <span className="placelist_text">Control Panal</span>
                <span className="placelist_text">Devices and Printers</span>
                <span className="placelist_text">Default Programs</span>
                <span className="placelist_text">Help and Support</span>
                
            </div>
        </Box>
    );
}