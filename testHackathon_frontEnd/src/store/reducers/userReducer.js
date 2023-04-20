import axios from "axios";

const ADD_USER = 'ADD_USER';
const ENTER_USER = 'ENTER_USER';
const CREATE_USER = 'CREATE_USER';


const initialState = {
    user: {
        personalData: {
            name: '',
            surName: '',
            patronymic: '',
            login: '',
            token: ''
        }
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_USER: {
            const enterUser = async () => {
                console.log(action.payload.login);
                console.log(action.payload.password);
                try {
                    const resp = await axios.post('http://192.168.215.83:3000/api/auth',
                        {
                            login: action.payload.login,
                            password: action.payload.password
                        }
                    )
                    console.log(resp)
                } catch (e) {
                    console.log(e);
                }
            }
            enterUser();
            return state;
        }

        case CREATE_USER: {
            return {
                ...state, user: {
                    personalData: {
                        login: action.payload.login,
                        password: action.payload.password
                    }
                }
            }
        }

        case ADD_USER: {

            const regUser = async () => {
                try {
                    console.log('log:',state.user.personalData.login,
                        'password:', state.user.personalData.password,
                        'name:', action.payload.name,
                        'telephone:', action.payload.telephone
                        )
                    const resp = await axios.post('http://192.168.215.83:3000/api/registration',
                        {
                                login: state.user.personalData.login,
                                password: state.user.personalData.password,
                                name: action.payload.name,
                                telephone: action.payload.telephone
                        })
                    console.log(resp);
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            personalData: {
                                ...state.user.personalData,
                                name: action.payload.name,
                                telephone: action.payload.telephone
                            }
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            regUser();
            addUser();
            return state;
        }
        default:
            return state;
    }
}

export const enterUser = (login, password) => ({type: ENTER_USER, payload: {password, login}})

export const createUser = (login, password) => ({type: CREATE_USER, payload: {password, login}})
export const addUser = (name, telephone) => ({
    type: ADD_USER,
    payload: {name, telephone}
})