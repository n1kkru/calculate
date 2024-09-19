import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Theme from "./components/themeButton/themeButton";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
