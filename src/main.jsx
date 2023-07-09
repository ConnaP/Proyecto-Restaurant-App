import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./pages/header/Header";
import "./index.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocal from "date-fns/locale/es";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocal}>
        {/* <Header /> */}
        <App />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
