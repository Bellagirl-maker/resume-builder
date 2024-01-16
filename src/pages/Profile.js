import { useNavigate, useParams } from "react-router-dom"

export const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams;
    return (
        <div>
            <h1>THIS IS THE PROFILE PAGE for {username}!</h1>
            <button onClick={() => {
                navigate("/contact");
            }}>GO TO CONTACT PAGE</button>
        </div>
    )

}