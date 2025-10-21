import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js//bootstrap.bundle.min.js";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeModeProvider } from "./Ui/ThemeToggle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeModeProvider>
      <App />
      </ThemeModeProvider>
    </BrowserRouter>
  </StrictMode>
);
