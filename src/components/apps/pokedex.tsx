import * as React from "react";
import { Window } from "../subcomponents/window";

export const Pokedex = () => {
    return (
        <Window title="Pokedex"
        content={
            <iframe id="pokedex" src="https://og-pokedex.herokuapp.com/"/>
        }></Window>
    );
}