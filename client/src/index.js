import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App_2 from "./App_2";
import App from "./App";
import UserStore from "./store/UserStore";
import TenderStore from "./store/TenderStore";

export const Context = createContext(null);

console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      tender: new TenderStore(),
    }}
  >
    <App_2 />
  </Context.Provider>,
  document.getElementById("root")
);
