import { createStore, combineReducers } from "redux";
import { mainReducer } from "./reducer";
const allReducer = combineReducers({ main: mainReducer });

export default createStore(allReducer);
