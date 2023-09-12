import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  TENDERUA_ROUTE,
  TEST_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import { Context } from "../index";

import Col from "react-bootstrap/Col";

const Test = () => {
  const { user } = useContext(Context);
  const history = useHistory();

  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Row>
        <div tyle="background-color:lavender;">
          <h1 align="center">TENDER UA</h1>
        </div>
      </Row>
      <Row>
        <div> </div>
      </Row>
      <Row>
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
      <Row>
        <Col></Col>
        <div>_</div>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <div>
            <form target="_blank">
              <button>
                {" "}
                <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
              </button>
            </form>
          </div>
        </Col>
        <Col></Col>
        <Col>
          {" "}
          <div>
            <form target="_blank">
              <button>
                <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink>
              </button>
            </form>
          </div>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>

      {/* <Button
        variant={"dark"}
        onClick={() => history.push(LOGIN_ROUTE)}
        // onClick={() => user.setIsAuth(true)}
      >
        Авторизація
      </Button> */}
    </Container>
  );
};

export default Test;
