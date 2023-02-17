
import { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const SERVER_URL = "http://localhost:8080";


const LoginContainer = ({closeModal, setJwt}) => {

    const [user, setUser] = useContext(UserContext);

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const loginRequest = () => {

        const reqBody = {
            "email": email,
            "password": password
        };
        console.log(JSON.stringify(reqBody));


        fetch(`${SERVER_URL}/api/auth/signin`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            method : "POST",
            body: JSON.stringify(reqBody),
        })
        .then ((response) => response.json())
        .then((response) => {
            if(response.id){
                closeModal(false)
                setUser(response)
                navigate("/cycles");
                 
            }
            else {
                 return Promise.reject("Invalid login attempt");
            }
        })
       
        .catch((message) => {
            console.log(message);
        });
    }



    return ( 
        <div className="login">

            <div className="modalContainer">
                <span onClick={() => closeModal(false)} className="close">&times;  </span>
                <div className="title">
                    <h3>Log in here</h3>
                    <p className="redfont">{error}</p>
                </div>
            <ul>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    placeholder ="enter email address"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)} />  
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    placeholder ="enter password"       
                    value={password}      
                    onChange = {(e) => setPassword(e.target.value)} />
                </div>
                
                <div>
                    <button id="submit" type="button" onClick={() => loginRequest()}>
                        Login
                    </button>
                </div> 

            </ul>
            </div>
        </div>

     );
}
 
export default LoginContainer;