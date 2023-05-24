import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { App, ConditionStore } from "./App";
import "./styles.css";

let stores = {
  $condition: new ConditionStore()
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider {...stores}>
    <App />
  </Provider>
);
