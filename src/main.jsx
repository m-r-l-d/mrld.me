import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Gallery from "./pages/gallery.jsx";
import Tools from "./pages/tools.jsx";
import NotFound from "./pages/not-found.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="tools" element={<Tools />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
