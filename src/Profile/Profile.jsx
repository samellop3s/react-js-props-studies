import "../Style/Style.css";

function Profile(props) {
    return (
        <div className="container">
            <div className="profile-container">
                <div className="profile-img">
                    <img src={props.image} alt="Profile" />
                </div>
                <div className="profile-desc">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;