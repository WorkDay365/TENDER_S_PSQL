import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
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
      <NavBar user={true} />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
