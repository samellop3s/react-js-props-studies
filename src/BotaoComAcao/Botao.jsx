import "../Style/Style.css";

function Botao(props) {
    return (
        <div className="conteiner-botao">
            <button className="botao"
            style={{ 
                backgroundColor: props.corDeFundo,
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px"
            }}
            onClick={props.aoClicar}
        >
            {props.texto}   
        </button>
        </div>
    );
}

export default Botao;