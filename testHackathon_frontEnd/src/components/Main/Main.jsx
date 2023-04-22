import classes from './Main.module.css'
import FlightForm from "../FlightForm/FlightForm.jsx";
import Button from "react-bootstrap/Button";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store/index.js";
import {addFlight, getWaitTime} from "../../store/reducers/flightReducer.js";
import Map from 'react-map-gl';
import Preferences from "../Preferences/Preferences.jsx";
import {getCategories} from "../../store/reducers/pointReducer.js";


const Main = (props) => {
    const dispatch = useDispatch();
    // dispatch(getWaitTime());


    // const state=useSelector(state=>state.flight);
    // console.log(state);
    console.log(props.flight);
    dispatch(getCategories());
    return (
        <div>
            <Preferences/>
            <h2 className={classes.title}>
                Введите информацию о рейсах
            </h2>
            {
                props.flight.data.map(el => <FlightForm from={el.from} fromTime={el.fromTime} waitTime={el.waitTime}
                                                        where={el.where} whereTime={el.whereTime}/>)
            }
            <div className={classes.plus} title={'Добавить еще один рейс'}
                 onClick={() => props.addFlight()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                     className="bi bi-plus-square" viewBox="0 0 16 16" style={{backgroundColor: 'white'}
                }>
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <Map
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5
                }}
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />;
        </div>
    )
}

export default Main;