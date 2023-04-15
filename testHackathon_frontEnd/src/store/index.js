import {combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer.js";
import {pointReducer} from "./reducers/pointReducer.js";

export const rootReducer=combineReducers(
    {
        user: userReducer,
        point: pointReducer
    }
)

export const store=createStore(rootReducer);