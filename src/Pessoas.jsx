import App from "./App";

function Pessoas() {
  const title = "Exercicio Props";
  const desc ="Passe props para o componente App e exiba as informações na tela.";
  const desc2 = "Neste card, estamos só passando algumas Strings.";
  return <App title={title} desc={desc} desc2={desc2} />;
}

export default Pessoas;
