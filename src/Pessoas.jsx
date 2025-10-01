import App from "./App";

function Pessoas() {

  const title = "Exercicio Props";
  const desc = "Passe props para o componente App e exiba as informações na tela.";
    return <App title={title} desc={desc} />;
}

export default Pessoas;
