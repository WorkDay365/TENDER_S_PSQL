import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  Button,
  Dropdown,
  Form,
  Row,
  Col,
  label,
  input,
  div,
} from "react-bootstrap";
import { Context } from "../../index";

import {
  createSubTypeTender,
  fetchSubTypesTenders,
  fetchTypesTender,
} from "../../http/tenderAPI";
import { observer } from "mobx-react-lite";
import myUKR from "./myUKR.css";

const CreateSubTypeTender = observer(({ show, onHide }) => {
  const { tender } = useContext(Context);
  const [title, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [tender_descript, setDescript] = useState("");

  useEffect(() => {
    fetchTypesTender().then((data) => tender.setTypesTender(data));
    //   fetchBrands().then(data => device.setBrands(data))
  }, []);

  const addInfo = () => {
    setInfo([
      ...info,
      { title: "", descript: "", typeTenderId: "", number: Date.now() },
    ]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  // const selectFile = (e) => {
  //   console.log(e.target.files);
  //   setFile(e.target.files[0]);
  // };

  const addSubTypeTender = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("tender_descript", tender_descript);
    // formData.append("tender_status", price);
    // formData.append("userId", 6);
    formData.append("typeTenderId", tender.selectedTypeTender.id);
    // formData.append("img", file);

    createSubTypeTender(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати тендер
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown СlassName="mt-2 mb-2">
            <Dropdown.Toggle>
              {tender.selectedTypeTender.title || "Виберить тип тендера"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {tender.typesTender.map((typeTender) => (
                <Dropdown.Item
                  onClick={() => tender.setSelectedTypeTender(typeTender)}
                  key={typeTender.id}
                >
                  {typeTender.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            value={title}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Введіть назву підтипу тендера"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
        <Button variant="outline-success" onClick={addSubTypeTender}>
          Додати
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateSubTypeTender;
