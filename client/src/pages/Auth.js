import React, { useContext, useState } from "react";
import { Alert, Container, Form, Col } from "react-bootstrap";
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

function randomNumber(bitRate) {
  let ind = 0;
  let step = 0;
  let tall = 0;
  let indStr = "";
  let pref = "00A";
  let genNumber = "";
  let step1 = false;
  let step2 = false;
  let strNuls = "";
  let numZero = "";
  let tallZero = 0;
  do {
    ind = Math.floor(Math.random() * bitRate);
    indStr = "";
    strNuls = "";
    numZero = "" + ind;
    tallZero = numZero.length;
    numZero = "";
    for (let i = 0; i < 6 - tallZero; i++) {
      strNuls = strNuls + "0";
    }

    indStr = indStr + pref + "-" + strNuls + ind;
    tall = indStr.length;
    // indStr = "00A-005111";

    if (
      (indStr[tall - 1] === indStr[tall - 2] &&
        indStr[tall - 2] === indStr[tall - 3]) ||
      (indStr[tall - 1] === indStr[tall - 2] &&
        indStr[tall - 3] === indStr[tall - 4])
    ) {
      genNumber = indStr;
    } else {
      return indStr;
    }

    step++;
  } while (step < 5000);
}

const strRegNum = randomNumber(10000);
const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [emailReserv, setEmailRezerv] = useState("");
  const [typeCompany, setTypeCompany] = useState("");
  const [passwordDuble, setPasswordDuble] = useState("");

  const click = async () => {
    try {
      console.log(email, password, emailReserv);
      let data;
      if (isLogin) {
        data = await login(email, password, emailReserv, title);
      } else {
        if (password !== passwordDuble) {
          Alert("Паролі не збігаються... перевірте");
          return;
        }
        console.log("title", title);
        data = await registration(strRegNum, password, emailReserv, title);
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

  console.log("type  ", typeCompany);
  // email = strRegNum;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизація" : "Реєстрація"}</h2>
        <h6 className="m-auto">.</h6>
        <h6 className="m-auto">{isLogin ? "" : `Ваш реєстраційний номер: `}</h6>
        <h4 className="m-auto">{isLogin ? "" : <div>{strRegNum}</div>}</h4>

        <Form className="d-flex flex-column">
          {/* {["radio"].map((typeCompany) => (
            <div key={`inline-${typeCompany}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                type={typeCompany}
                id={`inline-${typeCompany}-1`}
                value={1}
                onChange={(e) => setTypeCompany(e.target.value)}
              />
              <Form.Check
                inline
                label="2"
                type={typeCompany}
                id={`inline-${typeCompany}-2`}
                value={2}
                onChange={(e) => setTypeCompany(e.target.value)}
              />
              <Form.Check
                inline
                label="3 (disabled)"
                type={typeCompany}
                id={`inline-${typeCompany}-3`}
                value={3}
                onChange={(e) => setTypeCompany(e.target.value)}
              />
            </div>
          ))} */}

          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Введіть Вашу назву (ПІБ/ФОП/ТОВ)..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
          {isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Введіть Ваш реєстраційний номер..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
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
            placeholder="Введіть новий пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {!isLogin && (
            <Form.Control
              className="mt-3"
              value={passwordDuble}
              placeholder="Введіть новий пароль повторно..."
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
