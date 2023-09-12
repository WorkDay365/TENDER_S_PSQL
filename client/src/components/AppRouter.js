import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { TENDERUA_ROUTE, TEST_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
  //  const  isAuth = false
  const { user } = useContext(Context);
  const history = useHistory();
  if (user.isAuth) {
    history.push(TENDERUA_ROUTE);
    <Redirect to={TENDERUA_ROUTE} />;
  }

  return (
    <Switch>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect to={TEST_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
