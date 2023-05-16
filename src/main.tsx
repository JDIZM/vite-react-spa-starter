import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import base theme styles
import "./theme/index.scss";

// set router views
import NotFound from "./layout/not-found-page";
import Home from "./views/home/home";
import { PhotosView } from "./views/photos/photos";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<PhotosView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

console.log("store", store);
