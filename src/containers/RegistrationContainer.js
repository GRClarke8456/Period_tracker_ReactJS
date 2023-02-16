import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const SERVER_URL = "http://localhost:8080";

const RegistrationContainer = ({closeModal}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [DOB, setDOB] = useState(new Date)
    const [error, setError] = useState("");

    const [user, setUser] = useContext(UserContext);

    const navigate = useNavigate();

    const signUpRequest = () => {

        const reqBody = {
            "name": name,
            "email": email,
            "password": password,
            "DOB": DOB
        };
        console.log(JSON.stringify(reqBody));


        fetch(`${SERVER_URL}/api/auth/signup`, {
            headers: {
                "Content-Type": "application/json"
            },
            // mode: "no-cors",
            credentials: "include",
            method : "POST",
            body: JSON.stringify(reqBody),
        })
        .then ((response) => response.json())
        .then((response) => {
            console.log(response);
            if(response.id){
                closeModal(false)
                setUser(response)
                navigate("/questionnaire");
            }
            else {
                 return Promise.reject("Invalid sign up attempt");
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
                    <h3>Sign up here!</h3>
                    <p className="redfont">{error}</p>
                </div>
            <ul>

                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    placeholder ="enter your name"
                    value={name}
                    onChange = {(e) => setName(e.target.value)} />  
                </div>

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
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                    type="date" 
                    placeholder ="enter your date of birth"
                    value={DOB}
                    onChange = {(e) => setDOB(e.target.value)} />  
                </div>

                <div>
                    <button id="submit" type="button" onClick={() => signUpRequest()}>
                        Sign Up
                    </button>
                </div> 

            </ul>
            </div>
        </div>
    );
}
 
export default RegistrationContainer;