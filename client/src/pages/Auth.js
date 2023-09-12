import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TENDERUA_ROUTE,
} from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NavBar from "../components/NavBar";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [emailRezerv, setEmailRezerv] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");

  const click = async () => {
    try {
      let data;
      console.log("fddf");
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, emailRezerv, password, passwordSecond);
      }
      console.log(data);
      user.setUser(user);
      user.setIsAuth(true);
      console.log("TENDERUA_ROUTE ", TENDERUA_ROUTE);
      history.push(TENDERUA_ROUTE);
    } catch (e) {
      alert(e.response);
      // alert(e.response.data.message);
      // console.log("e.response.data.message ", e.response.data.message);
    }
  };
  console.log("user ", user);
  console.log("isLogin ", isLogin);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизація" : "Реєстрація"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введіть ваш логін..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isLogin ? (
            <Form.Control
              className="mt-3"
              placeholder="Введіть вашу пошту..."
              value={emailRezerv}
              onChange={(e) => setEmailRezerv(e.target.value)}
              isLogin={false}
            />
          ) : (
            <></>
          )}
          <Form.Control
            className="mt-3"
            placeholder="Введіть Ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {!isLogin ? (
            <Form.Control
              className="mt-3"
              placeholder="Введіть Ваш пароль повторно..."
              value={passwordSecond}
              onChange={(e) => setPasswordSecond(e.target.value)}
              type="password"
            />
          ) : (
            <></>
          )}
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Немає облікового запису?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
              </div>
            ) : (
              <div>
                Є обліковий запис? <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={click}>
              {isLogin ? "Увійти" : "Реєстрація"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
