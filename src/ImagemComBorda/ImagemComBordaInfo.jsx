import ImagemComBorda from './ImagemComBorda';
import ImgReact from '../src/Componentes/Imagens/ImgReact.png';
function ImagemComBordaInfo() {
    return(
        <ImagemComBorda 
            src={ImgReact}
            alt="Descrição da imagem" 
            borda="3px solid red" 
        />
    );
}

export default ImagemComBordaInfo;