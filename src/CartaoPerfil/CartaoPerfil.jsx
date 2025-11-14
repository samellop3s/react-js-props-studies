import "../Style/Style.css";

function CartaoPerfil(props) {
    return(
        <div className="container-cartaoPerfil">
            <div className="card-cartaoPerfil">
                <div className="card-selfi">
                    <img src={props.src} alt="Foto de Perfil" className="foto-de-perfil"/>
                </div>
                <div className="card-info">
                    <h2 className="nome-perfil">{props.nome}</h2>
                    <p className="descricao-perfil">{props.descricao}</p>
                </div>
            </div>
        </div>
    );
}

export default CartaoPerfil;