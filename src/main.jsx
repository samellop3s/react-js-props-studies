import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pessoas from "./Pessoas";
import Pessoas2 from "./Pessoas2";
import Botao from "./Botao.jsx"
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pessoas />
    <Pessoas2 />
    <Botao />
  </StrictMode>
);
