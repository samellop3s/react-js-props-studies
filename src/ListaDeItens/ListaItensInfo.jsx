import ListaItens from "./ListaItens";

function ListaItensInfo() {
    return (
        <ListaItens 
            titulo="Itens da Lista"
            descricao="Aqui estão os itens que você adicionou à sua lista."
            itens={["uniforme"]} // <- array em vez de string
        />    
    );
}

export default ListaItensInfo;