
import "../Style/Style.css";

function ImagemComLegenda(Props) {
    return (
        <div className="container4">
            <div style={{ textAlign: 'center' }}>
                <img src={Props.src}
                    alt={Props.alt}
                    style={{ width: "200px", borderRadius: "10px" }} />
                <p>{Props.legenda}</p>
            </div>
        </div>
    )
}

export default ImagemComLegenda;