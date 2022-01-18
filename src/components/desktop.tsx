import * as React from "react";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { StartMenu } from "./subcomponents/startmenu";


export const Desktop = () => {
    const style = {
        "backgroundImage": `url(${widescreen7})`
    }


    return(
        <div className="desktop_background" style={style} >
            <StartMenu />

            <div id="start_orb"></div>
            <div id="taskbar"></div>
        </div>
    );
}