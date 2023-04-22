import Accordion from "react-bootstrap/Accordion";
import React from "react";
import Form from 'react-bootstrap/Form';

const Preferences=()=>{
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Изменить предпочтения</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Form.Check
                            type={"checkbox"}
                            label={`Достопримечательности`}
                            id={`disabled-default-`}
                        />
                        <Form.Check
                            type={"checkbox"}
                            label={`Развлечения `}
                            id={`disabled-default-`}
                        />
                        <Form.Check
                            type={"checkbox"}
                            label={`Спорт `}
                            id={`disabled-default-`}
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default Preferences;