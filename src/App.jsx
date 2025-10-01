import "./App.css";


function App(props) {
  return (
      <div className="container">
        <div className="box">
          <h1>Titulo da obra: {props.title}</h1>
          <p>descrição da obra: {props.desc}</p>
        </div>
      </div>
  );
}

export default App;
