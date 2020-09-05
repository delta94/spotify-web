import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer, initialState } from "./context/DataLayer";
import reducer from "./reducer/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
