import { useEffect, useState } from "react";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";


const Navbar = ({postAccount}) => {

    const [account, setAccount] = useState(false); 
    const [allAccounts, setAllAccounts] = useState([]);
    const [loginModal, setLoginModal] = useState(false);
    const [registrationModal, setRegistrationModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)




    const logInToAnAccount = async (accountName, accountPassword) => {
        let check = false;
        for(const accountInList of allAccounts){
            if((accountInList.name===accountName)&(accountInList.password===accountPassword)){
                setAccount(accountInList);
                setIsLoggedIn(true)
                check= true;
            }
        }
        return check;
    };

    const ifLoggedIn = (element) => {
        if(isLoggedIn === true) {
            return element
        }
       
    }

    const ifLoggedOff = (element) => {
        if(isLoggedIn === false) {
            return element
        }
    }



    return ( 
        <>
        <nav >
        <div className="navbar">
        <ul>
        <button>
            {ifLoggedOff(
                
                 <li className="loginButton"
                    onClick={() => 
                        {setLoginModal(true)}}
                     > Login </li>
                     )}

                    {loginModal && <UserLogin closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>} 

                    </button>
                    
            {ifLoggedOff(
                <li className="loginButton" 
                    onClick={() => {setRegistrationModal(true)}}
                    > Sign Up </li> 
                    )}

                     {UserRegistration && <UserRegistration closeModal={setRegistrationModal} postAccount={postAccount}/>} 


                        {/* {ifLoggedIn (<p id="tempname"> 👤 {account.name}</p>
                            )} */}
                            

            {/* {ifLoggedIn(
                 <li className="homeButton settingsButton"> <Link className="linkbutton" to="/settings">Settings</Link></li>
                     )} */}
            
            {ifLoggedIn(
                <li className="homeButton logoutButton" onClick={() => setIsLoggedIn(false)}><Link className="linkbutton" to="/">Log Out</Link></li>
                    )}
               
        </ul>
        </div>
        </nav>
        </>
     );
}
 
export default Navbar;