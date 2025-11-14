import CartaoPerfil from "./CartaoPerfil";
import FotoDePerfil from "../Componentes/Imagens/fotoDePerfil.png";

function CartaoPerfilInfo(){
    return(
        <CartaoPerfil
            src={FotoDePerfil}
            nome="João Silva"
            descricao="Desenvolvedor Front-end apaixonado por criar interfaces intuitivas e responsivas."
        />
    );
}

export default CartaoPerfilInfo;