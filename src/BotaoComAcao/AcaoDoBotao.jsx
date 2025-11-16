import Botao from "./Botao";

function AcaoDoBotao() {
    function Mensagem() {
        alert("Botão clicado! Ação executada com sucesso.");
    }
    return (
        <div>
            <Botao
                texto="Clique aqui"
                corDeFundo="#28a745"
                aoClicar={Mensagem}
            />
        </div>
    )
}

export default AcaoDoBotao;