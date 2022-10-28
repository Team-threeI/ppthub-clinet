import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./app/App";
import store from "./app/store";
import { ToastProvider } from "./hooks/useToast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Router>
  </Provider>,
);
