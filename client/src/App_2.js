import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppRouter_First from "./components/AppRouter_First";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import Enter from "./components/Enter";

const App_2 = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  console.log("user ", user);
  return (
    <BrowserRouter>
      <NavBar user={false} />
      <AppRouter_First />
      {/* <Enter /> */}
    </BrowserRouter>
  );
});

export default App_2;
