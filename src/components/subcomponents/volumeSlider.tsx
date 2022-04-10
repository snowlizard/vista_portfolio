import * as React from "react";
import { Slider, ClickAwayListener } from "@mui/material";
import { volumeAction } from "../../redux/actions/volumeAction";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

export const VolumeControl = () => {
    const volume   =  useSelector( (state: RootStateOrAny) => state.volume);
    const dispatch = useDispatch();

    const handleClickAway = () => {
        dispatch(volumeAction(!volume));
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="volume_slider">
                <Slider defaultValue={45} orientation="vertical"
                    valueLabelDisplay="auto" 
                    sx={{ color : '#fff', height: "165px" }} />
            </div>
        </ClickAwayListener>
    );
}