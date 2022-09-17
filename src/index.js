import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CheckoutContext from "./CheckoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CheckoutContext>
      <App />
    </CheckoutContext>
  </React.StrictMode>
);
