import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { TENDERUA_ROUTE } from "../utils/consts";
import { TENDERUAFIRST_ROUTE, TEST_ROUTE } from "../utils/consts";
import { MAIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

const AppRouter_First = () => {
  const { user } = useContext(Context);
  console.log("user: ", user.isAuth);

  return (
    <Switch>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {user.isAuth === false &&
        publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
    // <Switch>
    //   {user.isAuth === true &&
    //     authRoutes.map(({ path, Component }) => (
    //       <Route key={path} path={path} component={Component} exact />
    //     ))}
    //   {publicRoutes.map(({ path, Component }) => (
    //     <Route key={path} path={path} component={Component} exact />
    //   ))}
    //   <Redirect to={MAIN_ROUTE} />
    // </Switch>
  );
};

export default AppRouter_First;
