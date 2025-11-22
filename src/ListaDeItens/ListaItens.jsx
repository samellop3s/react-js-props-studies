

function ListaItens(props) {
    // Garante que `itens` seja sempre um array:
    // - se já for array, usa direto
    // - se for string/valor único, transforma em array com um elemento
    // - se for undefined/null, usa array vazio
    const itens = Array.isArray(props.itens) ? props.itens : (props.itens ? [props.itens] : []);

    return (
        <div className="container-listaItens">
            <div className="container-titleDescri">
                <h2>{props.titulo}</h2>
                <p>{props.descricao}</p>
                <ul className="container-Itens">
                {itens.map((item, index) => (
                    // Aqui mapeamos `itens` para <li>. Usamos o index como key
                    // (aceitável para listas pequenas/estáticas; para listas dinâmicas prefira um id único)
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default ListaItens;