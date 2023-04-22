import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Authorization.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import Modal from "../Modal/Modal.jsx";
import ModalReg from "../Modal/Modal.jsx";
import {createUser, enterUser} from "../../store/reducers/userReducer.js";

const Authorization = () => {
    const [auth, setAuth] = useState(true);
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const dispatch=useSelector(state => state.user);

    // useEffect(() , modal)
    // const userData={
    //     log:'',
    //     password:'',
    //     name: '',
    //     telephone: ''
    // }

    const closeModal = () => {
        setModal(false);
    }

    const checkAuthUser = () => {
        console.log('log');
        if (login != null && password != null) {
            dispatch(enterUser(login, password));
        }
    }

    const regAuthUser = () => {
        if (login != null && password != null) {
            dispatch(createUser(login, password));
            setModal(true);
        };

    }

    return (
        <>
            {modal ? <ModalReg closeModal={() => closeModal()}/> : <></>}
            {
                auth ?
                    <>
                        <div className={classes.authorization}>
                            <Form className={classes.form}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control type="email" placeholder="Введите логин"
                                                  value={login} onChange={(e) => setLogin(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Введите пароль"
                                                  value={password} onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit"
                                        onClick={() => checkAuthUser()}
                                >
                                    Войти
                                </Button>
                            </Form>
                            <div className={classes.infoCard_signIn}>
                                <div className={classes.textWrapper}>
                                    <h2 className={classes.welcomeTitle}>
                                        Приветсвие
                                    </h2>
                                    <p className={classes.text}>
                                        Какой-то текст про то как классно будет если ты войдешь
                                    </p>
                                    <Button onClick={() => setAuth(false)}>Зарегестрироваться</Button>
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className={classes.authorization}>
                            <div className={classes.infoCard_signIn}>
                                <div className={classes.textWrapper}>
                                    <h2 className={classes.welcomeTitle}>
                                        Приветсвие
                                    </h2>
                                    <p className={classes.text}>
                                        Какой-то текст про то как классно будет если ты войдешь
                                    </p>
                                    <Button onClick={() => setAuth(true)}>Войти</Button>
                                </div>
                            </div>
                            <Form className={classes.form}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control type="email" placeholder="Введите логин"
                                                  value={login} onChange={(e) => setLogin(e.currentTarget.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Введите пароль"
                                                  value={password} onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary"
                                        onClick={() => regAuthUser()}
                                >
                                    Зарегестрироваться
                                </Button>
                            </Form>
                        </div>
                    </>
            }
        </>

    )
        ;
}

export default Authorization;