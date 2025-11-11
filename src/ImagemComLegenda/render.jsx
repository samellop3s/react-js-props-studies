import ImagemComLegenda from "./ImagemComLegenda";
import CachorroSorrindo from "../Componentes/Imagens/cachorroSorrindo.png";

function Render() {
    return (
        <div>
            <ImagemComLegenda
                src={CachorroSorrindo}
                alt="Cachorro feliz"
                legenda="Um cachorro feliz aproveitando o dia!" />
        </div>
    )
}

export default Render;