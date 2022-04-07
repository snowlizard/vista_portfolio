import * as React from "react";
import { Window } from "../subcomponents/window";

export const Weather = () => {
    return (
        <Window title="Weather"
        content={
            <iframe id="weather-dood" src="https://weather-dood.herokuapp.com/"/>
        }></Window>
    );
}