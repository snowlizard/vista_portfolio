import * as React from "react";
import Documents from '../../assets/ui/icons/Documents.ico';
import Pictures from '../../assets/ui/icons/Pictures.ico';
import Music from '../../assets/ui/icons/Music.ico';
import { Window } from "../subcomponents/window";
import { useDispatch } from "react-redux";
import { currentWallpaper } from "../../redux/actions/wallpaperAction";

// wallpapers
import paintings4 from '../../assets/wallpaper/paintings4.jpg';
import widescreen2 from '../../assets/wallpaper/widescreen2.jpg';
import widescreen4 from '../../assets/wallpaper/widescreen4.jpg';
import widescreen7 from '../../assets/wallpaper/widescreen7.jpg';

export const FileExplorer = () => {
    return(
        <Window title="Desktop"
        idname="explorerWindow"
        content={<Explorer />} />
    );
}

const Explorer = () => {
    const dispatch = useDispatch();

    const handleClick = (e: any) => {
        dispatch( currentWallpaper(e.target.src) );
    }

    return (
        <div className="fileExplorer">
            <div className="explorerNavBar">
                <div className="explorerLinks linksLabel">
                    <span>Favorite Links</span>
                </div>
                <div className="explorerLinks">
                    <img className="fileIcon" src={Documents}></img>
                    <span>Documents</span>
                </div>

                <div className="explorerLinks">
                    <img  className="fileIcon" src={Pictures}></img>
                    <span>Pictures</span>
                </div>

                <div className="explorerLinks">
                    <img className="fileIcon" src={Music}></img>
                    <span>Music</span>
                </div>

                <div className="explorerLinks linksFolder">
                    <span>Folders</span>
                    <span>^</span>
                </div>
            </div>

            <div className="explorerContent">
                <div>
                    <img src={paintings4} alt="paintings4" className="wallpapers"
                    id="paintings4" onClick={ (e) => handleClick(e) } />
                </div>

                <div>
                    <img src={widescreen2} alt="widescreen2" className="wallpapers"
                    id="widescreen2" onClick={ (e) => handleClick(e) } />
                </div>

                <div>
                    <img src={widescreen4} alt="widescreen4" className="wallpapers"
                    id="widescreen4" onClick={ (e) => handleClick(e) } />
                </div>

                <div>
                    <img src={widescreen7} alt="widescreen7" className="wallpapers"
                    id="widescreen7" onClick={ (e) => handleClick(e) } />
                </div>
            </div>
        </div>
    );
}