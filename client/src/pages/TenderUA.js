import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import TenderList from "../components/TenderList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import  {fetchTypesTender}  from "../http/tenderAPI";

const TenderUA = observer(() => {
  const { tender } = useContext(Context);

  useEffect(() => {
    fetchTypesTender().then((data) => 
    tender.setTypesTender(data));
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          {/* <BrandBar/> */}
          <TenderList />
          {/* //   <Pages/> */}
        </Col>
      </Row>
    </Container>
  );
});

export default TenderUA;
