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

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailReserv, setEmailRezerv] = useState("");
  const [passwordDuble, setPasswordDuble] = useState("");

  const click = async () => {
    try {
      console.log(email, password, emailReserv);
      let data;
      if (isLogin) {
        data = await login(email, password, emailReserv);
      } else {
        data = await registration(email, password, emailReserv);
      }
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  data req.body");
      console.log(data);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(user);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
      user.setUser(user);
      user.setIsAuth(true);
      history.push(TENDERUA_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
          {!isLogin && (
            <Form.Control
              checked={false}
              className="mt-3"
              placeholder="Введіть Вашу резервну пошту..."
              value={emailReserv}
              onChange={(e) => setEmailRezerv(e.target.value)}
            />
          )}
          <Form.Control
            className="mt-3"
            placeholder="Введіть Ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {!isLogin && (
            <Form.Control
              className="mt-3"
              value={passwordDuble}
              placeholder="Введіть Ваш пароль повторно..."
              onChange={(e) => setPasswordDuble(e.target.value)}
              type="password"
            />
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
