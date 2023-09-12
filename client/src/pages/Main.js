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
import { NavLink, useHistory } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  TENDERUA_ROUTE,
  TEST_ROUTE,
} from "../utils/consts";
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Main = observer(() => {
  // const { tender } = useContext(Context);
  const history = useHistory();
  // useEffect(() => {
  //   fetchTypesTender().then((data) => tender.setTypesTender(data));
  //   fetchTenders(null, 1, 4).then((data) => {
  //     // tender.setTender(data.rows));
  //     tender.setTender(data.rows);
  //     tender.setTotalCount(data.count);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchTenders(tender.selectedTypeTender.id, tender.page, 2).then((data) => {
  //     tender.setTender(data.rows);
  //     tender.setTotalCount(data.count);
  //   });
  // }, [tender.page, tender.selectedTypeTender]);

  return (
    <Container>
      {/* <NavBar /> */}
      <Row className="mt-2"></Row>
      <Row bg="dark">
        <Col>
          <p align="center">
            <h1 style={{ color: "dark" }}>Trender UA</h1>
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        {/* <BrandBar/> */}
        {/* <TenderList /> */}
        {/* <Pages /> */}
      </Row>
      <Row className="mt-2">
        <iframe
          width="1280"
          height="715"
          src="https://www.youtube.com/embed/YiR7fEBGQIM"
          title="Що таке тендер і як взяти в ньому участь?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Row>
      <Row className="mt-2"></Row>
      <Row className="mt-2">
        <Button
          style={{ color: "dark" }}
          variant={"outline-dark"}
          onClick={() => history.push(LOGIN_ROUTE)}
          // onClick={() => user.setIsAuth(true)}
        >
          Авторизація
        </Button>
      </Row>
      {/* <NavBar /> */}
    </Container>
  );
});

export default Main;
