import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useHistory } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  TENDERUA_ROUTE,
  TEST_ROUTE,
  SETTINGS_ROUTE,
  SELECTED_ROUTE,
  CREATED_ROUTE,
} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.clear();
    window.location.reload(true);
    history.push(TEST_ROUTE);
  };
  if (user.isAuth) {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={TEST_ROUTE}>
            Початок
          </NavLink>

          <NavLink style={{ color: "white" }} to={TENDERUA_ROUTE}>
            Trender UA v.0.8.18
          </NavLink>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(SELECTED_ROUTE)}
            >
              Відібрані
            </Button>
          </Nav>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(CREATED_ROUTE)}
            >
              Створені
            </Button>
          </Nav>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(SETTINGS_ROUTE)}
            >
              Налаштування
            </Button>
          </Nav>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Адмін панель
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                //onClick={()=> history.push(LOGIN_ROUTE)}
                className="ml-4"
              >
                Вийти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
                // onClick={() => user.setIsAuth(true)}
              >
                Авторизація
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    );
  } else {
    return <></>;
  }
});

export default NavBar;
