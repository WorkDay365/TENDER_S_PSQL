import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppRouter_First from "./components/AppRouter_First";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

import { Context2 } from "./index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useHistory, Route } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TENDERUA_ROUTE,
  TEST_ROUTE,
  MAIN_ROUTE,
} from "./utils/consts";

import Main from "./pages/Main";

import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App_2 = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    //setTimeout(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
    // }, 3000);
  }, []);
  try {
    if (loading) {
      return <Spinner animation={"grow"} />;
    }

    return (
      <BrowserRouter>
        <div>FIRST PAGE</div>
        {/* <Navbar bg="dark" data-bs-theme="dark"> */}
        <Container>
          <div>SECOND PAGE</div>

          <iframe
            width="1271"
            height="715"
            src="https://www.youtube.com/embed/so40j82qiCo"
            title="🔥 САУ M109 ЗНИЩУЄ російські гелікоптери — ЗНЯТО НА ПЕРЕДОВІЙ!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              className="ml-4"
              //  variant={"outline-light"}

              //onClick={() => history.push(LOGIN_ROUTE)}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизація
            </Button>

            <Button
              //  variant={"outline-light"}
              className="ml-4"
              onClick={() => history.push("/")} // LOGIN_ROUTE
              // onClick={() => user.setIsAuth(true)}
            >
              Регістрація
            </Button>
            <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
          </Nav>

          {/* // <BrowserRouter>
    //   <NavBar />
    //   <AppRouter />
    </BrowserRouter> */}
        </Container>
        {/* </Navbar> */}

        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  } catch {
    console.log("error +");
  }

  //
});
export default App_2;
