import { createStore, combineReducers } from "redux";
import { updateBootState } from "./reducers/bootStateReducer";
import { updateAppState } from "./reducers/appsReducer";


const reducers = combineReducers({
    boot: updateBootState,
    apps: updateAppState
});

export const store = createStore(reducers);