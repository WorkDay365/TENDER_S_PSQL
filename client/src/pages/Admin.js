import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
//import CreateBrand from "../components/modals/CreateBrand";
import CreateTender from "../components/modals/CreateTender";
import CreateTypeTender from "../components/modals/CreateTypeTender";

const Admin = () => {
  // const [brandVisible, setBrandVisible] = useState(false)
  const [typeTenderVisible, setTypeTenderVisible] = useState(false);
  const [tenderVisible, setTenderVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
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
        // onClick={() => setBrandVisible(true)}
      >
        Додати ...
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTenderVisible(true)}
      >
        Додати тендер
      </Button>
      {/* <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>*/}
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
