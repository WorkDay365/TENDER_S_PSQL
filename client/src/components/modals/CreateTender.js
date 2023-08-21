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

import {createTender, fetchTenders, fetchTypesTender} from "../../http/tenderAPI";
import { observer } from "mobx-react-lite";
import myUKR from "./myUKR.css";

const CreateTender = observer(({ show, onHide }) => {
  const { tender } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);


      useEffect(() => {
          fetchTypesTender().then(data => tender.setTypesTender(data))
            //   fetchBrands().then(data => device.setBrands(data))
      }, [])

      const addInfo = () => {
         setInfo([...info, {title: '', description: '', number: Date.now()}])
      }
      const removeInfo = (number) => {
          setInfo(info.filter(i => i.number !== number))
      }
      const changeInfo = (key, value, number) => {
          setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
      }

      const selectFile = e => {
        console.log(e.target.files)
        setFile(e.target.files[0])
      }
 
      const addTender = () => {
        console.log(info)
        console.log(name)
        console.log(price)
     

          // const formData = new FormData()
          // formData.append('name', name)
          // formData.append('price', `${price}`)
          // formData.append('img', file)
          // formData.append('brandId', tender.selectedBrand.id)
          // formData.append('typeId', tender.selectedTypeTender.id)
          // formData.append('info', JSON.stringify(info))
          // createTender(formData).then(data => onHide())
      }

  return (
    // <div>
    //     CreateTender
    // </div>
      //'tender.selectedTypesTender.title' ||

    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати тендер
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown СlassName="mt-2 mb-2">
            <Dropdown.Toggle>{tender.selectedTypeTender.title ||"Виберить тип тендера"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {tender.typesTender.map((typeTender) => (
                <Dropdown.Item 
                onClick={() => tender.setSelectedTypeTender(typeTender)}
                key={typeTender.id}>   

                               {typeTender.title}
                
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
                       value={name}
                       onChange={e => setName(e.target.value)}
                       placeholder={"Введіть назву тендера"}
          />
          {/* <Form.Control
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введіть опис тендера"
          /> */}
          <div className="mt-3">
            <textarea
              placeholder="Введіть опис тендера"
              class="form-control"
              rows="7"
            ></textarea>
          </div>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введить приблизну вартість тендера, грн"
            type="number"
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
        <Button variant="outline-success" onClick={addTender}>Додати</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateTender;
