import {combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer.js";
import {pointReducer} from "./reducers/pointReducer.js";
import {flightReducer} from "./reducers/flightReducer.js";

export const rootReducer=combineReducers(
    {
        user: userReducer,
        point: pointReducer,
        flight: flightReducer
    }
)

export const store=createStore(rootReducer);