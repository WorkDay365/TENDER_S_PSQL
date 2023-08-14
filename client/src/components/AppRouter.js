import React, { useContext } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes,publicRoutes } from "../routes";
import {TENDERUA_ROUTE} from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
    
     //  const  isAuth = false
     const {user} = useContext(Context)
       return (
       <Switch>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
            <Route key = {path} path = {path} component = {Component} exact/>
          )}
               {publicRoutes.map(({path, Component}) =>
            <Route key = {path} path = {path} component = {Component} exact/>
          )}
          <Redirect to ={TENDERUA_ROUTE}/>
        </Switch>


    )
   
    
}

export default AppRouter;
