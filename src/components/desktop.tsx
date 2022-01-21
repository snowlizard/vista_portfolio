import * as React from "react";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { Taskbar } from "./subcomponents/taskbar";
import { Icons } from "./subcomponents/desktopIcons";
import { Window } from "./subcomponents/window";

export const Desktop = () => {


    const style = {
        "backgroundImage": `url(${widescreen7})`
    }

    return(
        <div className="desktop_background" style={style} >
            <Icons />
            <Taskbar />
        </div>
    );
}

// windows app will work by using
// <Window content={<p>Hello world</p>} title="uhhh"/>
// pass component data as child to parent window and title