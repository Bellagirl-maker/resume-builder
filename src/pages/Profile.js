import { useNavigate } from "react-router-dom"

export const Profile = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1>THIS IS THE PROFILE PAGE</h1>
            <button onClick={() => {
                navigate("/contact");
            }}>GO TO CONTACT PAGE</button>
        </div>
    )

}