import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import EntryPoint from "./EntryPoint";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntryPoint />
  </StrictMode>
);
