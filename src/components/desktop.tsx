import * as React from "react";
import { Moment } from "moment";
import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { StartMenu } from "./subcomponents/startmenu";
import { Icons } from "./subcomponents/desktopIcons";
import { Window } from "./subcomponents/window";
import * as moment from "moment";

export const Desktop = () => {
    const currentTime = moment().format('hh:mm A');

    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState(currentTime);

    // update clock ever 55 seconds
    useEffect( () => {
        setInterval( () => {
            setTime(moment().format('hh:mm A'))
        }, 55000)
    })


    const style = {
        "backgroundImage": `url(${widescreen7})`
    }

    const handleClick = () => {
        setVisible(!visible);
    }

    return(
        <div className="desktop_background" style={style} >
            <Icons />

            <ClickAwayListener onClickAway={ () => setVisible(false)}>
                <div>
                    <div id="start_orb" onClick={handleClick}></div>
                    { visible ? <StartMenu /> : null }
                </div>
            </ClickAwayListener>
            <div id="taskbar"></div>
            <div id="taskbar_time">{time}</div>
        </div>
    );
}

// windows app will work by using
// <Window content={<p>Hello world</p>} title="uhhh"/>
// pass component data as child to parent window and title