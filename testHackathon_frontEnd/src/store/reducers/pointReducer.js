import axios from "axios";

const GET_CATEGORIES='GET_CATEGORIES'

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRzZiIsInN1YiI6IjY0M2QzNDgyYWZlNmE4MGEwOGMzMzFjZSIsInBhc3MiOiJzZGZkc2ZzIiwicGhvbmUiOiIrNzk1MzQ1MTU2MDIiLCJpYXQiOjE2ODE5NzcxMDQsImV4cCI6MTY4MjA2MzUwNH0.zdel8sLpWsXvIue9kWLonqC0nUouZOximUQ4KtD4kj0'

const initialState={
    city:'',
    amountOfTime:'',
    preference:[],
}

export const pointReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_CATEGORIES:{

            const get= async ()=>{
                console.log('getC')
                const respC=await axios.get(`http://192.168.215.83:3000/api/places:Moscow`)
                console.log(respC)


                // const resp=await axios.get(`http://192.168.215.83:3000/api/${token}/preference`,
                //     {
                //         cityName:'Moscow',
                //
                //     })
                // console.log(resp);
            }
            get();
        }
        default:
            return state;
    }
}

export const getCategories=()=>({type:GET_CATEGORIES})