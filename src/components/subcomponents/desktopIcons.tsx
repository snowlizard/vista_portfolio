import * as React from "react";
import thispc from '../../assets/ui/shell32.png';
import bin from '../../assets/ui/recyclebin.png';
import github from '../../assets/ui/github.png';
import aboutMe from '../../assets/ui/about.png';

export const Icons = () => {
    return (
        <div className="iconsContainer">
            <div className="iconContainer">
                <img className="icons" src={thispc}></img>
                <span className="iconText">Computer</span>
            </div>
            <div className="iconContainer">
                <img className="icons" src={bin}></img>
                <span className="iconText">Recycle Bin</span>
            </div>
            <div className="iconContainer">
                <img className="icons" src={github}></img>
                <span className="iconText">Github</span>
            </div>
            <div className="iconContainer">
                <img className="icons" src={aboutMe}></img>
                <span className="iconText">About</span>
            </div>
        </div>
    );
}