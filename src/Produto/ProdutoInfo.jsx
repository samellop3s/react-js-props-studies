import Produto from "./Produto";
import ImgProdutoVenda from "../Componentes/Imagens/imgProdutoVenda.png";

function ProdutoInfo() {
    return (
        <div>
            <Produto 
                nome="Smartphone XYZ" 
                descricao="Um smartphone moderno com todas as funcionalidades que você precisa." 
                preco={1999.99} 
                imagem={ImgProdutoVenda}
            />
        </div>
            
    );
}

export default ProdutoInfo;