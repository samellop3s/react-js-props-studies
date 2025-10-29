import { blue } from "@mui/material/colors";
import "./App.css";


function App(props) {
  return (
      <div className="container">
        <div className="box">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <p style={{color: "red"}}>{props.desc2}</p>
        </div>
        <div className="caixa">
          <h1></h1>
          <p></p>
          <p styled={{color: blue}}>{}</p>
        </div>
      </div>
  );
}

export default App;
