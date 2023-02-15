import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import ArticleList from "../components/ArticleList";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";
import ArticleContainer from "./ArticleContainer";
import CycleContainer from "./CycleContainer"; 
import Settings from "../components/Settings";


const HomeContainer = () => {
    
// const SERVER_URL = "http://localhost:8080"


    const [user, setUser] = useState(false); 
    const [account, setAccount] = useState(false);
    const [allAccounts, setAllAccounts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
   




    const postAccount = async (newAccount) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAccount)
        }) 
        const savedAccount = await response.json();
        savedAccount.users = [];
        setAllAccounts([...allAccounts, savedAccount])
        setIsLoggedIn(true)
        setUser(savedAccount);
    };

    const updateAccount = async (customisedAccount) => {
        const response = await fetch(`http://localhost:8080/users/${user.id}`, {
            method: "PATCH",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(customisedAccount)
        }) 
        const updatedAccount = await response.json();

        const updatedAccountList = allAccounts.map((accountInsideAllAccounts)=>{
            if(accountInsideAllAccounts.id=== updatedAccount.id){
                return updatedAccount;
            }
            return accountInsideAllAccounts;
        })
        setAllAccounts(updatedAccountList);
        setAccount(updatedAccount);
        setIsLoggedIn(true)
    };



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

        <BrowserRouter>
        <div>
        
        <div className="navbar">

             <ul>
             {ifLoggedIn(
                <li className="homeButton">
                    <Link className="linkbutton" to="/cycles">Cycles</Link>
                </li>
             )}

                {ifLoggedIn(
                <li className="homeButton">
                    <Link className="linkbutton" to="/articles">Articles</Link>
                </li>
                )}

                {ifLoggedIn(
                <li className="homeButton">
                    <Link className="linkbutton" to="/favourites">Favourites</Link>
                </li>
                )}
                    </ul>


            <ul>
        
        {/* <button> */}
            {ifLoggedOff(
                
                 <li className="loginButton"
                    onClick={() => 
                        {setLoginModal(true)}}
                     > Login </li>
                     )}

                    {loginModal && <UserLogin closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>} 

                    {/* </button> */}

                    {/* <button> */}
                    
            {ifLoggedOff(
                <li className="loginButton" 
                    onClick={() => 
                        {setSignupModal(true)}}
                    > Sign Up </li> 
                    )}

                     {signupModal && <UserRegistration closeModal={setSignupModal} postAccount={postAccount}/>} 



            {ifLoggedIn(
                 <li className="homeButton settingsButton"> <Link className="linkbutton" to="/settings">Settings</Link></li>
                     )} 
            
             {ifLoggedIn(
                <li className="homeButton logoutButton" onClick={() => setIsLoggedIn(false)}><Link className="linkbutton" to="/">Log Out</Link></li>
                    )}

                {/* </button> */}
                </ul>
                </div>   
        
            <Routes>


            <Route path="/settings" element={
                        <Settings />}
                    />
            
            <Route path="/articles" element={
                        <ArticleContainer articles={account.articles}/>}
                    />
            <Route path="/cycles" element={
                        <CycleContainer cycles={account.cycles}/>}
                    />

            </Routes>
            
               
            </div>
        </BrowserRouter>

     );
}
 
export default HomeContainer;