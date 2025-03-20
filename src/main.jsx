import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles.css";
//mport App from './App.jsx'
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
