import "../Style/Style.css";

function Produto(props) {
    return (
        <div className="container-produto">
            <div className="card-produto">
                <div className="produto-img">
                    <img src={props.imagem} alt={props.nome} 
                    style={{ width: "150px", borderRadius: "10px" }}
                    />
                </div>
                <div className="produto-desc">
                    <h2>{props.nome}</h2>
                    <p>{props.descricao}</p>
                    <h3>R$ {props.preco ? Number(props.preco).toFixed(2) : "0,00"}</h3>
                </div>
            </div>
        </div>
    );
}   

export default Produto;
