import * as React from "react";
import resume from '../../assets/resume.pdf';
import { Window } from "../subcomponents/window";

export const Resume = () => {
    return (
        <Window title="Resume"
        content={
            <iframe src={resume}></iframe>
        } />
    );
}