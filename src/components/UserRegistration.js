import React from "react";
import {useState} from 'react';

const UserRegistration = ({closeModal, postAccount}) => {

const dateConverter = (date)=>{
    const components = date.split("-");
    return `${components[2]}/${components[1]}/${components[0]}`;
}

const [stateUser, setStateUser] = useState(
    {
        name: "",
        password: "",
        dateOfBirth: "",
        email: ""

    }
)

const [stateUserFinal, setStateUserFinal] = useState(
    {
        name: "",
        password: "",
        dateOfBirth: "",
        email: ""

    }
)

const handleChange = (event) => {
    let propertyName = event.target.name; 
    let copiedUser = {...stateUser}
    copiedUser[propertyName] = event.target.value;
    setStateUser(copiedUser);
    setStateUserFinal(copiedUser);
}

const handleChangeDate = (event) => {
    let propertyName = event.target.name;
    let copiedUser1 = {...stateUser}
    let copiedUser2 = {...stateUser}
    copiedUser1[propertyName] = event.target.value;
    copiedUser2[propertyName] = dateConverter(event.target.value);
    setStateUser(copiedUser1);
    setStateUserFinal(copiedUser2);
}

const handleSubmit = (event) => {
    event.preventDefault()
    postAccount(stateUserFinal) 
    closeModal(false)
}


return ( 
    <div className="modalBackground"> 
    <div className="modalContainerSignup">
    <span onClick={() => closeModal(false)} className="close">&times;  </span>
        <div className="title">
            <h3>Sign Up:</h3>
        </div>
        <ul>

        <div className="loginText">
            <form className="signup" role="search" onSubmit={handleSubmit}>

                <div className="login_label" htmlFor="signup_input">Username:
                <input
                    type="text"
                    placeholder="Type username here..." 
                    name= "name" 
                    value={stateUser.name}
                    onChange={handleChange} />
                    </div>

                <div className="login_label" htmlFor="signup_input">Email:
                <input 
                    type="text"
                    placeholder="Type email here..." className="signup_input" 
                    name="email"
                    value={stateUser.email}
                    onChange={handleChange} />
                    </div>

                <div className="login_label" htmlFor="signup_input">Password:
                <input 
                    type="password" 
                    placeholder="Type password here..." className="signup_input"
                    name="password" 
                    value={stateUser.password}
                    onChange={handleChange} />
                    </div>

                    <div className="login_label" htmlFor="signup_input">Confirm Password:
                <input 
                    type="password" 
                    placeholder="Type password here..." className="signup_input"
                    name="password" 
                    value={stateUser.password}
                    onChange={handleChange} />
                    </div>


                <div className="login_label" htmlFor="signup_input">Date of Birth:
                <input 
                    type="date" 
                    placeholder="Enter DOB here..." className="signup_input" 
                    name="dateOfBirth"
                    value={stateUser.dateOfBirth} 
                    onChange={handleChangeDate} />
                </div>

                <input type="submit" value="OK" className="okButton"/>

                
            </form>
            
        </div>

        </ul>
    </div>
    </div>

    
 );
}

export default UserRegistration;
