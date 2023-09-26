import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
//import CreateBrand from "../components/modals/CreateBrand";
import CreateTender from "../components/modals/CreateTender";
import CreateTypeTender from "../components/modals/CreateTypeTender";
import CreateSubTypeTender from "../components/modals/CreateSubTypeTender";
import CreateTender2 from "../components/modals/CreateTender2";

const Admin = () => {
  // const [brandVisible, setBrandVisible] = useState(false)
  const [typeTenderVisible, setTypeTenderVisible] = useState(false);
  const [tenderVisible, setTenderVisible] = useState(false);
  const [subTypeTenderVisible, setSubTypeTenderVisible] = useState(false);
  const [tenderVisibl2, setTenderVisible2] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <h1>НАЛАШТУВАННЯ</h1>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeTenderVisible(true)}
      >
        Додати тип тендера
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setSubTypeTenderVisible(true)}
      >
        Додати піддип тендера
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTenderVisible(true)}
      >
        Додати тендер
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTenderVisible2(true)}
      >
        Додати тендер v.2
      </Button>
      <CreateSubTypeTender
        show={subTypeTenderVisible}
        onHide={() => setSubTypeTenderVisible(false)}
      />
      <CreateTender2
        show={tenderVisible}
        onHide={() => setTenderVisible2(false)}
      />
      <CreateTender
        show={tenderVisible}
        onHide={() => setTenderVisible(false)}
      />
      <CreateTypeTender
        show={typeTenderVisible}
        onHide={() => setTypeTenderVisible(false)}
      />
    </Container>
  );
};

export default Admin;
