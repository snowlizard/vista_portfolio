import * as React from "react";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';


export const Desktop = () => {
    const style = {
        "backgroundImage": `url(${widescreen7})`
    }


    return(
        <div className="desktop_background" style={style} >
            <div id="taskbar"></div>
        </div>
    );
}