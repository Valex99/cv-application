import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Main from "./components/Main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
