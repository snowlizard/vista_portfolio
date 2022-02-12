import { createStore, combineReducers } from "redux";
import { updateBootState } from "./reducers/bootStateReducer";
import { updateAppState } from "./reducers/appsReducer";
import { updateStartmenuState } from "./reducers/startmenuReducer";

const reducers = combineReducers({
    boot: updateBootState,
    apps: updateAppState,
    menu: updateStartmenuState
});

export const store = createStore(reducers);