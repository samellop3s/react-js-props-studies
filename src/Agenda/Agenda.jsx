function Agenda(props) {

    const dates = Array.isArray(props.data) ? props.data : (props.data ? [props.data] : []);
    const tasks = Array.isArray(props.paragrafo) ? props.paragrafo : (props.paragrafo ? [props.paragrafo] : []);

    return (
        <div className="container-agenda">
            <div className="titleDesc-agenda">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} </li>
                ))}
                {dates.map((date, index) => (
                    <li key={index}>Data: {date} </li>
                ))}
            </ul>

        </div>
    );
}

export default Agenda;