import * as React from "react";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { StartMenu } from "./subcomponents/startmenu";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { Icons } from "./subcomponents/desktopIcons";

export const Desktop = () => {
    const [visible, setVisible] = useState(false);

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
        </div>
    );
}