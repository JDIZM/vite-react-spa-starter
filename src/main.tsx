import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme/index.scss";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./views/Todos";
import Example from "./views/Example";
import Invoices from "./views/Invoices/Index";
import Invoice from "./views/Invoices/Invoice";
import NotFound from "./layout/NotFound";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="todos" element={<Todos />} />
          <Route path="example" element={<Example />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

console.log(store);
