import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ⬅️ WAJIB BEGINI (bukan @/)
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
