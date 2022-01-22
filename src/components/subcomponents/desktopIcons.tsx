import * as React from "react";
import { useDispatch } from "react-redux";
import { appIsOpen } from "../../redux/actions/appAction";
import { Apps } from "../apps/applist";

export const Icons = () => {
    const dispatch = useDispatch();

    const openApp = (app: string) => {
        dispatch(appIsOpen({name: app, open: true}))
    }

    return (
        <div className="iconsContainer">
            {
                Apps.map( app => {
                    return (
                        <div className="iconContainer" key={`${app.name}+desktopIcon`}
                        onClick={ () => openApp(app.name) }>
                            <img className="icons" src={app.icon}></img>
                            <span className="iconText">{app.name}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}
