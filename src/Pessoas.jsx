import App from "./App";

function Pessoas() {

  const title = "Exercicio Props";
  const desc = "Passe props para o componente App e exiba as informações na tela.";
  const desc2 = "Neste card, estamos só passando algumas Strings.";
    return <App title={title} desc={desc} desc2={desc2} />;
}

function Pessoa2() {

  const title2 = "Apresentação";
  const desc3 = "Ola! me chamo Samuel e tenho 21 anos";
  const desc4 = "Atualmente estudo Front-end e designer"
    return <App title2={title2} desc3={desc3} desc4={desc4} />;
}

export default Pessoas;
