import * as React from "react";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { Taskbar } from "./subcomponents/taskbar";
import { Icons } from "./subcomponents/desktopIcons";
import { Apps } from "./apps/applist";

export const Desktop = () => {


    const style = {
        "backgroundImage": `url(${widescreen7})`
    }

    return(
        <div className="desktop_background" style={style} >
            <Icons />
            <Taskbar />
            {
                Apps.map( app => {
                    return app.open ?
                        app.app
                        : null
                })
            }
        </div>
    );
}
