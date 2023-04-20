const ADD_FLIGHT = 'ADD_FLIGHT';
const FIND_FLIGHT = 'FIND_FLIGHT';
const GET_WAITTIME='GET_WAITTIME';

const initialState = {
    data: [
        {
            flightNumber: '',
            from: 'Orenburg',
            fromTime: '6:20',
            where: 'Moscow',
            whereTime: '6:30',
            waitTime: '6:00'
        },
        {
            from: 'Moscow',
            fromTime: '12:30',
            where: 'Voronezh',
            whereTime: '13:30',
            waitTime: '1:00'
        }
    ]
}

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FLIGHT: {
            const flightData = {
                from: '',
                fromTime: '',
                where: '',
                whereTime: '',
                waitTime: null
            }
            return {...state, data: [...state.data, flightData]}
        }
        case FIND_FLIGHT: {
            //оправляю номер рейса, получаю информацию откуда, куда, время откуда и куда
            const flightData = {
                from: 'city',
                fromTime: '00:00',
                where: '2city',
                whereTime: '00:00',
                waitTime: null
            }
            return {...state, data: [state.data.slice(0, -1), flightData]}
        }
        case GET_WAITTIME:{
            //получение всех записей об ожидании
            const waitTime=[
                '6:00',
                null
            ];
            const newData=[];
            for(let i=0;i<state.data.length;i++){
                newData[i]= {...state.data[i]};
                newData[i].waitTime=waitTime[i];
            }
            console.log(newData);
            return {...state};
        }
        default:
            return state;
    }
}
export const addFlight = () => ({type: ADD_FLIGHT})
export const findFlight = (flightNumber) => ({type: FIND_FLIGHT, payload: flightNumber})
export const getWaitTime=()=>({type: GET_WAITTIME});