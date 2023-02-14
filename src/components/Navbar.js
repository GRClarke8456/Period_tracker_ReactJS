import { useEffect, useState } from "react";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import ArticleList from "./ArticleList";
import CycleList from "./CycleList";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";



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
        <BrowserRouter>
        <div className="navbar">
            <h2>Nav Bar!</h2>
        <ul>
            {ifLoggedOff(
                
                 <li className="loginButton"
                    onClick={() => 
                        {setLoginModal(true)}}
                     > <Link to="/login">Login</Link> 
                </li>
                     )}

                    {loginModal && <UserLogin closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>} 
                    
            {ifLoggedOff(
                <li className="loginButton" 
                    onClick={() => {setRegistrationModal(true)}}
                    > <Link to="/signup">Sign Up</Link>
                </li> 
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

                    <li> <Link to="/articles">Articles</Link> </li>

                    <li> <Link to="/cycles">Cycles</Link> </li>
        </ul>
        <Routes>
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/signup" element={<UserRegistration />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/cycles" element={<CycleList />} />
            <Route path="/" element={<ArticleList/>} />

        </Routes>
        </div>
        </BrowserRouter>
        </>
     );
}
 
export default Navbar;