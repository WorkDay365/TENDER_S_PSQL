import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import TenderList from "../components/TenderList";
import Pages from "../components/Pages";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypesTender, fetchTenders } from "../http/tenderAPI";

const TenderUA = observer(() => {
  const { tender } = useContext(Context);

  useEffect(() => {
    fetchTypesTender().then((data) => tender.setTypesTender(data));
    fetchTenders(null, 1, 4).then((data) => {
      // tender.setTender(data.rows));
      tender.setTender(data.rows);
      tender.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchTenders(tender.selectedTypeTender.id, tender.page, 2).then((data) => {
      tender.setTender(data.rows);
      tender.setTotalCount(data.count);
    });
  }, [tender.page, tender.selectedTypeTender]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={1}>
          {/* <BrandBar/> */}
          <TenderList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default TenderUA;
