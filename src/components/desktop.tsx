import * as React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Taskbar } from "./subcomponents/taskbar";
import { Icons } from "./subcomponents/desktopIcons";
import { Slider } from "@mui/material";

export const Desktop = () => {
    const apps = useSelector( (state: RootStateOrAny) => state.apps);
    const wallpaper = useSelector( (state: RootStateOrAny) => state.wallpaper);

    const style = {
        "backgroundImage": `url(${wallpaper})`
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

            <div className="volume_slider">
                <Slider defaultValue={45} orientation="vertical"
                    valueLabelDisplay="auto" 
                    sx={{ color : '#fff', height: "165px" }} />
            </div>
        </div>
    );
}
