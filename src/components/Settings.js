import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Settings =({account, user, updateAccount})=>{

    // const navigate = useNavigate();

    // const dateConverterNew = (date)=>{
    //     const components = date.split("-");
    //     return `${components[2]}/${components[1]}/${components[0]}`;
    // }

    // const dateConverterOld = (date)=>{
    //     const components = date.split("/");
    //     return `${components[2]}-${components[1]}-${components[0]}`;
    // }


    // const [stateUser, setStateUser] = useState(
    //     {
    //         name: user.name,
    //         password: user.password,
    //         dateOfBirth: dateConverterOld(user.dateOfBirth),
    //         email: user.email

    //     }
    // )

    // const [stateUserFinal, setStateUserFinal] = useState(
    //     {
    //         name: user.name,
    //         password: user.password,
    //         dateOfBirth: user.dateOfBirth,
    //         email: user.email

    //     }
    // )

    // const handleChange = (event) => {
    //     let propertyName = event.target.name; 
    //     let copiedUser = {...stateUser}
    //     copiedUser[propertyName] = event.target.value;
    //     setStateUser(copiedUser);
    //     setStateUserFinal(copiedUser);
    // }

    // const handleChangeDate = (event) => {
    //     let propertyName = event.target.name; 
    //     let copiedUser1 = {...stateUser}
    //     let copiedUser2 = {...stateUser}
    //     copiedUser1[propertyName] = event.target.value;
    //     copiedUser2[propertyName] = dateConverterNew(event.target.value);
    //     setStateUser(copiedUser1);
    //     setStateUserFinal(copiedUser2);
    // }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     updateAccount(stateUserFinal)
    //     navigate("/")
    // }

    return (
        <>
            <div className="settingsTitle page">
                <h2>Settings</h2>
            </div>
            {/* <div className="emojiHead">👤</div>  */}

            <br></br>

            <ul className="settingpadding">

                <div className="settingsText">
                    <form className="settingsForm" role="search" >
                    {/* onSubmit={handleSubmit} >  */}

                        <div className="inputWrapper">
                            <label className="settingslabel" htmlFor="signup_input">Username: </label>
                                <input
                                    type="text"
                                    placeholder="Type username here..." 
                                    name= "name" 
                                    // value={stateUser.username}
                                    // onChange={handleChange}
                                    />

                        </div> 
                        
                        <div className="inputWrapper">

                            <label className="settingslabel" htmlFor="signup_input">Password: </label>
                                <input 
                                    type="password" 
                                    placeholder="Type password here..." className="signup_input"
                                    name="password" 
                                    // value={stateUser.password}
                                    // onChange={handleChange} 
                                />
                  
                        </div> 

                        <div className="inputWrapper">

                            <label className="settingslabel" htmlFor="signup_input">Email: </label>
                                <input 
                                    type="text"
                                    placeholder="Type email here..." className="signup_input" 
                                    name="email"
                                    // value={stateUser.email}
                                    // onChange={handleChange} 
                                />
      
                        </div> 

                        <div className="inputWrapper">

                            <label className="settingslabel" htmlFor="signup_input">Date of Birth: </label>
                                <input 
                                    type="date" 
                                    placeholder="Enter DOB here..." className="signup_input" 
                                    name="dateOfBirth"
                                    // value={stateUser.dateOfBirth} 
                                    // onChange={handleChangeDate} 
                                />
        
                        </div> 

                    <button>
                        <input type="submit" value="Save Changes" />
                        </button>

                    </form>
                </div>

            </ul>
        </>
        // <h3>hi</h3>
    )
}
export default Settings;