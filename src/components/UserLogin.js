import React from "react";
import { useState } from 'react';


const UserLogin = ({closeModal, logInToAnAccount}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await logInToAnAccount(userName,password)
        if(result != true){
            setError("Incorrect combination of details")
        }
        else{
        setError("")
        closeModal(false)
        }
    }

    return ( 
        <div className="modalBackground"> 
        <div className="modalContainer">
            <span onClick={() => closeModal(false)} className="close">&times;  </span>
            <div className="title">
                <h3 className="loginTextnew">Log in</h3>
                <p className="redfont">{error}</p>
            </div>
            <ul>
            <form className="login" role="search" onSubmit={handleSubmit}>

            <div className="loginText">
                <div className="inputWrapper">
                    <div className="login_label" htmlFor="login_input">Username:
                    <input 
                        type="text" 
                        placeholder="Type username here..." className="login_input" 
                        value={userName}
                        onChange={event => setUserName(event.target.value)} />
                        </div>
                        </div>

                        <div className="inputWrapper">
                    <div className="login_label" htmlFor="login_input">Password:
                    <input 
                        type="password"
                        placeholder="Type password here..." className="login_input" 
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    </div>
                    <input type="submit" value="OK" className="okButton"/>
                    </div>

                    </div>

                </form>
               
            </ul>
            {/* <p>Don't have an account? Click Here to Sign up.</p> */}

        </div>
        </div>

        
     );
}
 
export default UserLogin;