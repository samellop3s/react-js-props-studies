import Style from "../Style/Style.css";

function Users(Props) {
  return ( 
    <>
    <div className="container3">
        <div className="cardInfo">
            <h1>{Props.title}</h1>
            <p>Name: {Props.desc}</p>
            <p>Age: {Props.yeas}</p>
            <p>City: {Props.city}</p>
        </div>
    </div>
    </>
);
}

export default Users;