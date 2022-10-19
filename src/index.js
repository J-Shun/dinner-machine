import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Decide from "./pages/Decide/Decide";
import Management from "./pages/Management/Management";
import Help from "./pages/Help/Help";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="decide" element={<Decide />} />
          <Route path="management" element={<Management />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
