import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./css/bootstrap.min.css"; //Latest compiled and minified CSS
import "./css/font-awesome.min.css"; //Font Awesome minified CSS
// import "./css/admin.css"; //Theme style
import "./plugins/datatables/dataTables.bootstrap.css"; //Theme style
import "./plugins/multiselect/bootstrap-multiselect.css"; //bootstrap Multiselect
// import "./plugins/multiselect/bootstrap-multiselect.js";
// import "./plugins/select/bootstrap-select.js"; //bootstrap select
import "./plugins/select/bootstrap-select.css";
import "./plugins/datepicker/bootstrap-datepicker.js"; //bootstrap datepicker
import "./plugins/datepicker/datepicker3.css";
import "./js/consilium.js";
import "./css/style.css";

// import "./plugins/homePage/main.js";

// import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
