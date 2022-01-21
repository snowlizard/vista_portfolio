import * as React from "react";
import thispc from '../../assets/ui/icons/shell32.png';
import bin from '../../assets/ui/icons/recyclebin.png';
import github from '../../assets/ui/icons/github.png';
import aboutMe from '../../assets/ui/icons/about.png';
import vscode from '../../assets/ui/icons/vscode.png';

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
            <div className="iconContainer">
                <img className="icons" src={vscode}></img>
                <span className="iconText">VSCode</span>
            </div>
        </div>
    );
}