import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
//import {createTender, fetchBrands, fetchTenders, fetchTypesTender} from "../../http/tenderAPI";
import { observer } from "mobx-react-lite";

const CreateTender = observer(({ show, onHide }) => {
  const { tender } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  //     useEffect(() => {
  //       //  fetchTypesTender().then(data => tender.setTypesTender(data))
  //      //   fetchBrands().then(data => device.setBrands(data))
  //     }, [])

  //     const addInfo = () => {
  //         setInfo([...info, {title: '', description: '', number: Date.now()}])
  //     }
  //     const removeInfo = (number) => {
  //         setInfo(info.filter(i => i.number !== number))
  //     }
  //     const changeInfo = (key, value, number) => {
  //         setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  //     }

  //     const selectFile = e => {
  //         setFile(e.target.files[0])
  //     }

  //     const addTender = () => {
  //         const formData = new FormData()
  //         formData.append('name', name)
  //         formData.append('price', `${price}`)
  //         formData.append('img', file)
  //         formData.append('brandId', tender.selectedBrand.id)
  //         formData.append('typeId', tender.selectedTypeTender.id)
  //         formData.append('info', JSON.stringify(info))
  //   //      createTender(formData).then(data => onHide())
  //     }

  return (
    // <div>
    //     CreateTender
    // </div>

    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавити тип тендера
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            //           value={value}
            //           onChange={e => setValue(e.target.value)}
            placeholder={"Введіть назву типу"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        {/* <Button variant="outline-success" onClick={addType}>Добавить</Button> */}
      </Modal.Footer>
    </Modal>

    //     <Modal
    //         show={show}
    //         onHide={onHide}
    //         centered
    //     >
    //         <Modal.Header closeButton>
    //             <Modal.Title id="contained-modal-title-vcenter">
    //                 Додати тендер
    //             </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //             <Form>
    //                 <Dropdown className="mt-2 mb-2">
    //                     <Dropdown.Toggle>{tender.selectedType.name || "Виберить тип"}</Dropdown.Toggle>
    //                     <Dropdown.Menu>
    //                         {tender.types.map(type =>
    //                             <Dropdown.Item
    //                                 onClick={() => tender.setSelectedType(type)}
    //                                 key={type.id}
    //                             >
    //                                 {type.name}
    //                             </Dropdown.Item>
    //                         )}
    //                     </Dropdown.Menu>
    //                 </Dropdown>
    //                 <Dropdown className="mt-2 mb-2">
    //                     <Dropdown.Toggle>{tender.selectedBrand.name || "Виберить тип"}</Dropdown.Toggle>
    //                     <Dropdown.Menu>
    //                         {/* {tender.brands.map(brand =>
    //                             <Dropdown.Item
    //                                 onClick={() => tender.setSelectedBrand(brand)}
    //                                 key={brand.id}
    //                             >
    //                                 {brand.name}
    //                             </Dropdown.Item>
    //                         )} */}
    //                     </Dropdown.Menu>
    //                 </Dropdown>
    //                 <Form.Control
    //                     value={name}
    //                     onChange={e => setName(e.target.value)}
    //                     className="mt-3"
    //                     placeholder="Введите название устройства"
    //                 />
    //                 <Form.Control
    //                     value={price}
    //                     onChange={e => setPrice(Number(e.target.value))}
    //                     className="mt-3"
    //                     placeholder="Введите стоимость устройства"
    //                     type="number"
    //                 />
    //                 <Form.Control
    //                     className="mt-3"
    //                     type="file"
    //                     onChange={selectFile}
    //                 />
    //                 <hr/>
    //                 <Button
    //                     variant={"outline-dark"}
    //                     onClick={addInfo}
    //                 >
    //                     Добавить новое свойство
    //                 </Button>
    //                 {info.map(i =>
    //                     <Row className="mt-4" key={i.number}>
    //                         <Col md={4}>
    //                             <Form.Control
    //                                 value={i.title}
    //                                 onChange={(e) => changeInfo('title', e.target.value, i.number)}
    //                                 placeholder="Введите название свойства"
    //                             />
    //                         </Col>
    //                         <Col md={4}>
    //                             <Form.Control
    //                                 value={i.description}
    //                                 onChange={(e) => changeInfo('description', e.target.value, i.number)}
    //                                 placeholder="Введите описание свойства"
    //                             />
    //                         </Col>
    //                         <Col md={4}>
    //                             <Button
    //                                 onClick={() => removeInfo(i.number)}
    //                                 variant={"outline-danger"}
    //                             >
    //                                 Видалити
    //                             </Button>
    //                         </Col>
    //                     </Row>
    //                 )}
    //             </Form>
    //         </Modal.Body>
    //         <Modal.Footer>
    //             <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
    //             <Button variant="outline-success" onClick={addTender}>Додати</Button>
    //         </Modal.Footer>
    //     </Modal>
  );
});

export default CreateTender;
