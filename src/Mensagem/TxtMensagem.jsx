import Mensagem from "./Mensagem";

function TextMensagem () {
    return (
        <div>
            <Mensagem 
                Usuario="Katarina"
                Texto="Oi, tudo bem?"
                hora="14:35hrs"
            />
        </div>
    );
}

export default TextMensagem;