import "../src/Style/Style.css";

function ImagemComBorda (props) {
    return (
        <div className="container-ImagemComBorda">
            <div className="container-imagem">
                <img 
                    src={props.src} 
                    alt={props.alt} 
                    style={{ border: props.borda }} 
                />
            </div>
        </div>
    );
}

export default ImagemComBorda;