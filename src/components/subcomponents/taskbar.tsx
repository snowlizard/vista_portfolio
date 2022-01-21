import * as React from "react";
import * as moment from "moment";
import { ClickAwayListener } from "@mui/material";
import { useState, useEffect } from "react";
import { StartMenu } from "./startmenu";
import wifi from '../../assets/ui/icons/wifi.png'
import volume from '../../assets/ui/icons/volume.png';


export const Taskbar = () => {
    const currentTime = moment().format('hh:mm A');
    const [time, setTime] = useState(currentTime);
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    // update clock ever 55 seconds
    useEffect( () => {
        setInterval( () => {
            setTime(moment().format('hh:mm A'))
        }, 55000)
    })
    
    return (
        <div>
            <ClickAwayListener onClickAway={ () => setVisible(false)}>
            <div>
                <div id="start_orb" onClick={handleClick}></div>
                { visible ? <StartMenu /> : null }
            </div>
            </ClickAwayListener>
            <div id="taskbar">
                <div id="taskbar_time">{time}</div>
                <img src={volume} className="taskbar_icon" id="volume_icon" />
                <img src={wifi} className="taskbar_icon" id="wifi_icon" />
            </div>
        </div>
    );
}