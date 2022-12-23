import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Components/App/App";
import { store } from "./store";
import "./Components/GlobalTheme/css/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
