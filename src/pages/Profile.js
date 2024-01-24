// import { useNavigate, useParams } from "react-router-dom"

import ChangeProfile from "./ChangeProfile";

export const Profile = (props) => {
    return (
        <div> Profile user is {props.username}
        <ChangeProfile setUser= {props.setUser} />
        </div>
    );
    // let navigate = useNavigate();
    // let { username } = useParams;
    // return (
    //     <div>
    //         <h1>THIS IS THE PROFILE PAGE for {username}!</h1>
    //         <button onClick={() => {
    //             navigate("/contact");
    //         }}>GO TO CONTACT PAGE</button>
    //     </div>
    // )

}