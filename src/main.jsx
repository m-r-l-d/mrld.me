import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home.jsx";
import Tools from "./pages/tools.jsx";
import NotFound from "./pages/not-found.jsx";
import Microscopy from "./pages/microscopy.jsx";
import Lapidary from "./pages/lapidary.jsx";
import Art from "./pages/art.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="art" element={<Art />} />
          <Route path="microscopy" element={<Microscopy />} />
          <Route path="lapidary" element={<Lapidary />} />
          <Route path="tools" element={<Tools />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
