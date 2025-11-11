import Profile from "./Profile.jsx";
import selfiePerfil from "../Componentes/Imagens/selfiePerfil.png";

function InfoProfile() {
    return (
        <>
            <Profile
                image={selfiePerfil}
                name="John Doe"
                description="A passionate developer and tech enthusiast."
            />
        </>
    );
}
export default InfoProfile;