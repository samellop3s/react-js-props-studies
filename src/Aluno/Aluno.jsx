import "../Style/Style.css";

function Aluno (props) {
    return (
        <div className="container-Aluno">
            <div className="container-InfoAluno">
                <h2>Nome: {props.nome}</h2>
                <p>Idade: {props.idade} anos</p>
                <p>Curso: {props.curso}</p>
            </div>
        </div>
    );
}

export default Aluno;