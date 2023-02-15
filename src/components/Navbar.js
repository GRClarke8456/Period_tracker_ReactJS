import { useEffect, useState } from "react";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";


const Navbar = ({postAccount}) => {

    const [account, setAccount] = useState(false); 
    const [allAccounts, setAllAccounts] = useState([]);
    const [loginModal, setLoginModal] = useState(false);
    const [registrationModal, setRegistrationModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);




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
        
              
        
        </>


     );
}
 
export default Navbar;