import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:8080";

const RegistrationContainer = ({closeModal}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState()
    const [error, setError] = useState("");

    const loginRequest = () => {

        const reqBody = {
            "name": name,
            "email": email,
            "password": password,
            "dob": dob
        };
        console.log(JSON.stringify(reqBody));


        fetch(`${SERVER_URL}/api/auth/signup`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            method : "POST",
            body: JSON.stringify(reqBody),
        })
        // .then ((response) => response.json())
        .then((response) => {
            if(response.status === 200){
                window.location.href = "/cycles";
                return response.headers; 
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
                    value={dob}
                    onChange = {(e) => setDob(e.target.value)} />  
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
 
export default RegistrationContainer;