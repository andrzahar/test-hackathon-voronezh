const initialState={
    personalData:{
        name:'',
        surName:'',
        patronymic:''
    },
    auth:{
        login:'',
        password:''
    }
}

export const userReducer=(state=initialState, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}