import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";  
import TenderStore from "./store/TenderStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new TenderStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);




// import React, { createContext } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import UserStore from './store/User.Store';

// export const Context = createContext(null)


// ReactDOM.Render(
//   <Context.Provider value={{
//     user: new UserStore()
//   }}>
//     <App />
//   </Context.Provider>,
//   document.getElementById('root')
// )
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

