import * as React from "react";
import { useState, useEffect } from "react";
import * as moment from "moment";
import { ClickAwayListener } from "@mui/material";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { startMenuIsOpen } from "../../redux/actions/startMenuAction";
import { StartMenu } from "./startmenu";
import { volumeAction } from "../../redux/actions/volumeAction";
import wifi from '../../assets/ui/icons/wifi.png'
import volume from '../../assets/ui/icons/volume.png';


export const Taskbar = () => {
    const dispatch    = useDispatch();
    const isVisible   = useSelector( (state: RootStateOrAny) => state.menu);
    const volumeOpen  = useSelector( (state: RootStateOrAny) => state.volume );
    const currentTime = moment().format('hh:mm A');
    const [time, setTime] = useState(currentTime);

    const handleClick = () => {
        dispatch(startMenuIsOpen(!isVisible));
    }

    // toggle volume control slider
    const handleVolume = () => {
        dispatch(volumeAction(volumeOpen));
    }
    
    // update clock ever 55 seconds
    useEffect( () => {
        setInterval( () => {
            setTime(moment().format('hh:mm A'))
        }, 55000)
    })
    
    return (
        <div>
            <ClickAwayListener onClickAway={ () => dispatch(startMenuIsOpen(false))}>
            <div>
                <div id="start_orb" onClick={handleClick}></div>
                { isVisible ? <StartMenu /> : null }
            </div>
            </ClickAwayListener>
            <div id="taskbar">
                <div id="taskbar_time">{time}</div>
                <img src={volume} className="taskbar_icon" id="volume_icon"
                    onClick={handleVolume}/>
                <img src={wifi} className="taskbar_icon" id="wifi_icon" />
            </div>
        </div>
    );
}