import { useState } from "react";

function Botao(props) {
    const [clicando, setClicando] = useState(false);
    return (
        <div className="container2">
             <button style={{    
                backgroundColor: props.corFundo,          
                color: 'white', 
                padding: '100px 150px', 
                border: 'none', 
                borderRadius: '25px', 
                cursor: 'pointer', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', }} onClick={() => setClicando(!clicando)}>
            {props.text}
        </button>
        </div>
       
    );
}



export default Botao;