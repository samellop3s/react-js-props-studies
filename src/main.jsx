import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pessoas from "./Pessooas/Pessoas.jsx";
import Pessoas2 from "./Pessooas/Pessoas2.jsx";
import Dados from "./Botao/Dados.jsx";
import Info from "./Usuarios/info.jsx";
import Render from "./ImagemComLegenda/render.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pessoas />
    <Pessoas2 />
    <Dados />
    <Info />
    <Render />
  </StrictMode>
);
