import React from "react";
import {connect} from "react-redux";
import {addFlight, findFlight, getWaitTime} from "../../store/reducers/flightReducer.js";
import Main from "./Main.jsx";

const mapStateToProps=(state)=>{
    return{
        flight: state.flight
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addFlight:()=>{
            dispatch(addFlight());
        },
        findFlight:()=>{
            dispatch(findFlight(flightNumber));
        },
        // getWaitTime:()=>{
        //     dispatch(getWaitTime());
        // }
    }
}

const MainContainer=connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;