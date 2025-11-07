import { useState } from "react";

function Botao(props) {
  const [clicando, setClicando] = useState(false);
  return (
    <div className="container2">
      <div className="titleBotao">
        <h1>Aqui estamos Fazendo manipulação do botao com props</h1>
      </div>
      <button
        style={{
          backgroundColor: props.corFundo,
          color: "white",
          padding: "100px 150px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          boxShadow: clicando
            ? "inset 0 4px 8px rgba(0, 0, 0, 0.3)" // efeito de "pressionado"
            : "0 4px 10px rgba(0, 0, 0, 0.2)",
          transform: clicando ? "scale(0.97)" : "scale(1)", // leve redução ao clicar
          transition: "all 0.1s ease-in-out",
        }}
        onMouseDown={() => setClicando(true)}   // quando o mouse pressiona
        onMouseUp={() => setClicando(false)}    // quando solta o clique
        onMouseLeave={() => setClicando(false)} // garante que o efeito some ao sair do botão
      >
        {props.text}
      </button>
    </div>
  );
}

export default Botao;
