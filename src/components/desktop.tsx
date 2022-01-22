import * as React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import widescreen7 from '../assets/wallpaper/widescreen7.jpg';
import { Taskbar } from "./subcomponents/taskbar";
import { Icons } from "./subcomponents/desktopIcons";

export const Desktop = () => {
    const apps = useSelector( (state: RootStateOrAny) => state.apps);

    const style = {
        "backgroundImage": `url(${widescreen7})`
    }

    return(
        <div className="desktop_background" style={style} >
            <Icons />
            <Taskbar />
            {
                apps.map( (app: any) => {
                    if(app.open) return app.app
                })
            }
        </div>
    );
}
