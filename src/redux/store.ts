import { createStore, combineReducers } from "redux";
import { updateBootState } from "./reducers/bootStateReducer";
import { updateAppState } from "./reducers/appsReducer";
import { updateStartmenuState } from "./reducers/startmenuReducer";
import { changeWallpaper } from "./reducers/wallpaperReducer";

const reducers = combineReducers({
    boot: updateBootState,
    apps: updateAppState,
    menu: updateStartmenuState,
    wallpaper: changeWallpaper
});

export const store = createStore(reducers);