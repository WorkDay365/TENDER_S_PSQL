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
  createTender,
  createTender2,
  fetchTenders,
  fetchTypesTender,
  fetchSubTypesTender,
} from "../../http/tenderAPI";
import { observer } from "mobx-react-lite";
import myUKR from "./myUKR.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateTender = observer(({ show, onHide }) => {
  const { tender } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [tender_description, setDescription] = useState("");
  const [typeTender, setTypeTender] = useState("");
  const [SubTypeTender, setSubTypeTender] = useState("");

  useEffect(() => {
    fetchTypesTender().then((data) => tender.setTypesTender(data));
    const formData = new FormData();
    formData.append("typeTenderId", typeTender.id);
    fetchSubTypesTender(formData).then((data) =>
      tender.setSubTypesTender(data)
    );
  }, []);

  const addInfo = () => {
    setInfo([
      ...info,
      { title: "", description: "", coast: "", number: Date.now() },
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

  const selectFile = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const addTender = () => {
    console.log(info);
    console.log(name);
    console.log(price);
    console.log(typeTender.id);
    // *******************
    // name, tender_description, tender_status , userId, typeTenderId, img:fileName
    //******************* */
    const formData = new FormData();
    formData.append("name", name);
    formData.append("tender_description", tender_description);
    formData.append("tender_status", price);
    formData.append("userId", 6);
    formData.append("typeTenderId", tender.selectedTypeTender.id);
    formData.append("subTypeTenderId", tender.selectedSubTypeTender.id);
    formData.append("img", file);
    formData.append("info", JSON.stringify(info));

    createTender(formData).then((data) => onHide());
  };

  return (
    <Modal
      show={show}
      fullscreen={true}
      data-target=".bd-example-modal-lg"
      onHide={onHide}
      centered
      className="full-screenable-node"
    >
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
          <></>
          <Dropdown СlassName="mt-2 mb-2">
            <Dropdown.Toggle className="mt-3">
              {tender.selectedSubTypeTender.title || "Виберить підтип тендера"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {tender.subTypesTender.map((subTypeTender) => (
                <Dropdown.Item
                  onClick={() => tender.setSelectedSubTypeTender(subTypeTender)}
                  key={subTypeTender.id}
                >
                  {subTypeTender.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Введіть назву тендера"}
          />
          <Form.Control
            className="mt-3"
            value={tender_description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Введіть опис тендера"
          />
          {/* <div className="mt-3">
            <textarea
              placeholder="Введіть опис тендера"
              class="form-control"
              rows="7"
            ></textarea>
          </div> */}
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введить приблизну вартість тендера, грн"
            //  type="number"
          />
          <div className="mt-3">Введить бажану дату початку робіт:</div>
          <Form.Control
            // value={price}
            // onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1"
            placeholder="Введить бажану дату початку робіт"
            type="date"
          />
          <div className="mt-3">Введить бажану дату закінчення робіт:</div>

          <Form.Control
            // value={price}
            // onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1"
            placeholder="Введить бажану дату закінчення робіт"
            type="date"
          />

          <Form.Control
            // value={price}
            // onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введить область, де треба виконати роботу"
            //  type="number"
          />

          <Form.Control
            className="mt-3 ButtonInputUKR"
            type="file"
            onChange={selectFile}
          />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Додати опис робіт
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              {/* <Col md={4}> */}
              <Form.Control
                value={i.title}
                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                placeholder="Введить опис роботи"
              />
              {/* </Col> */}
              {/* <Col md={4}> */}
              <Form.Control
                value={i.description}
                onChange={(e) =>
                  changeInfo("description", e.target.value, i.number)
                }
                placeholder="Введить об'єм робіт ( шт, кг, м.п. тощо ) "
              />
              {/* </Col> */}
              {/* <Col md={4}> */}
              <Form.Control
                value={i.coast}
                onChange={(e) => changeInfo("coast", e.target.value, i.number)}
                placeholder="Введить приблизну вартість роботи"
              />
              {/* </Col> */}

              {/* <Col md={4}> */}
              <Button
                className="mt-3"
                onClick={() => removeInfo(i.number)}
                variant={"outline-danger"}
              >
                Удалить
              </Button>
              {/* </Col> */}
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
        <Button variant="outline-success" onClick={addTender}>
          Додати
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateTender;
