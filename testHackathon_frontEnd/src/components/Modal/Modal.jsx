import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addUser} from "../../store/reducers/userReducer.js";

function ModalReg({closeModal}) {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('')

    const dispatch = useDispatch();
    const addNewUser = () => {
        if(!!tel&&!!name){
            dispatch(addUser(name, tel));
        }
    }

    return (
        <div
            className="modal show"
            style={{
                display: 'block', position: 'absolute',
                background: 'gray', zIndex: 1
            }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => closeModal()}>
                    <Modal.Title>Дополнительные сведения</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="name" placeholder="Введите имя"
                                      value={name} onChange={(e)=>setName(e.currentTarget.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="phone" placeholder="Введите телефон"
                                      value={tel} onChange={(e)=>setTel(e.currentTarget.value)}
                        />
                    </Form.Group>
                    {/*<Form.Group className="mb-3">*/}
                    {/*    <Form.Label>Предпочтения</Form.Label>*/}
                    {/*    <Form.Control type="text" placeholder="Выбирете предпочтения"/>*/}
                    {/*</Form.Group>*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => closeModal()}>Закрыть</Button>
                    <NavLink to={'/main'}>
                        <Button variant={"primary"}
                                onClick={() => addNewUser()}
                        >

                            Добавить информацию</Button>
                    </NavLink>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalReg;