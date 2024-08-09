import "./main.module.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
