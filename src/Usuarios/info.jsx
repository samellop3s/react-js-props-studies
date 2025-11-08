import Users from './Users';

function Info() {
    const title = "User Information";
    const desc = "Rafaela Silva";
    const yeas = 21;
    const city = "São Paulo";
    return <Users title={title} desc={desc} yeas={yeas} city={city} />;
}

export default Info;    