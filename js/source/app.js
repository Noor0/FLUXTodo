import Todo from "./Components/Todo";
import React from "react";
import ReactDOM from "react-dom";
import Store from "./flux/Store";

Store.init();

ReactDOM.render(<Todo />, document.getElementById("app"));
