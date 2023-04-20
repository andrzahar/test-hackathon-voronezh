import classes from './FlightForm.module.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FlightForm = ({from, fromTime, where, whereTime, waitTime}) => {
    return (
        <>
            <div className={classes.wrapper}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" maxlenght={2}>
                        <Form.Label>Номер рейса</Form.Label>
                        <Form.Control type="text" placeholder="АА 000 А" pattern={'[a-zA-Z]{2}\\s[0-9]{3}\\s[a-zA-Z]'}
                                      id={'flightNumber'} style={{width: "100px", textTransform: 'uppercase'}}/>
                    </Form.Group>
                </Form>
                <Button className={classes.findBtn} >Найти рейс</Button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Откуда</Form.Label>
                        <Form.Control type="text" disabled={true} value={from}
                                      style={{width: "200px", textTransform: 'uppercase'}}/>
                        <Form.Text className="text-muted">
                            Время убытия: {fromTime}
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Куда</Form.Label>
                        <Form.Control type="text" disabled={true} value={where}
                                      style={{width: "200px", textTransform: 'uppercase'}}/>
                        <Form.Text className="text-muted">
                            Время прибытия: {whereTime}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
            <div className={classes.info}>
                <div className={classes.line}/>
                {
                    waitTime ?
                        <div style={{display:"flex", flex:4, justifyContent:"space-around"}}>
                            <p className={classes.waitingTime}> Время между рейсами: {waitTime} </p>
                            <a className={classes.mapLink}> места, которые можно посетить</a>
                        </div>
                        : <></>
                }

            </div>

        </>

    )
}

export default FlightForm;