import * as React from "react";
import { Window } from "../subcomponents/window";

export const About = () => {
    return (
        <Window 
        title="About"
        content={
            <MyContent />
        }/>
    );
}


const MyContent = () =>  {
    return (
        <div className="content">
            <h1>Julian Gonzalez</h1>
            <h2>Web Developer</h2>
        </div>
    );
}