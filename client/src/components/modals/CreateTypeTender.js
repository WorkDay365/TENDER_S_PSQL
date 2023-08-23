import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createTypeTender} from "../../http/tenderAPI";

const CreateTypeTender = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addTypeTender = () => {
        createTypeTender({title: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити тип тендера
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть назву типу"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addTypeTender}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTypeTender;
