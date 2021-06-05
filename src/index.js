import React from "react";
import ReactDOM from "react-dom";
import App from "./Container/App";
import AppStateProvider from "./shared/context/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
