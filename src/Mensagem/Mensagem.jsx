import "../Style/Style.css";

function Mensagem(props) {
    return (
        <div className="container-mensagem">
            <div className="card-mensagem">
                <div className="usuario-mensagem">
                    <h2>{props.usuario}</h2>
                </div>
                <div className="texto-mensagem">
                    <p>{props.texto}</p>
                </div>
                <div className="horario-mensagem">
                    <span>{props.hora}</span>
                </div>
            </div>
        </div>
    );
}

export default Mensagem;