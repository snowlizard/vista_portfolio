import { createStore } from "redux";
import { updateBootState } from "./reducers/bootStateReducer";


export const store = createStore(updateBootState);