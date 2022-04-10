import * as React from "react";
import { Slider } from "@mui/material";


export const VolumeControl = () => {
    return (
        <div className="volume_slider">
            <Slider defaultValue={45} orientation="vertical"
                valueLabelDisplay="auto" 
                sx={{ color : '#fff', height: "165px" }} />
        </div>
    );
}