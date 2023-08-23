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
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={TENDERUA_ROUTE}>
          Trender UA v.0.7.2
        </NavLink>
        <NavLink style={{ color: "white" }} to={TEST_ROUTE}>
          TEST
        </NavLink>
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
});

export default NavBar;
