import { useState, useContext, useEffect, useLayoutEffect} from "react";
import { UserContext } from "../App";
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
// import ArticleList from "../components/ArticleList";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";
import ArticleContainer from "./ArticleContainer";
import CycleContainer from "./CycleContainer"; 
import Settings from "../components/Settings";
import LoginContainer from "./LoginContainer";
import Footer from "../components/Footer";

import Favourites from "../components/Favourites";
import RegistrationContainer from "./RegistrationContainer";
import Search from "../components/Search";
import ArticleInfo from "../components/ArticleInfo";
import Questionnaire from "../components/Questionnaire";




const HomeContainer = ({setJwt, filterArticles}) => {
    
const SERVER_URL = "http://localhost:8080"


     
    const [account, setAccount] = useState(false);
    const [allAccounts, setAllAccounts] = useState([]);
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const [user, setUser] = useContext(UserContext);
       

    useEffect(() => {
    const fetchData = async() => {
        const response = await fetch(`${SERVER_URL}/users`, {
            credentials: "include"
        })
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
        }, [])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/users`,
            {credentials: "include"})
            const data = await response.json();
            setAllAccounts(data);
        }
        fetchData()
            }, [])

    
        useEffect(() => {
            const fetchData = async() => {
                const response = await fetch(`${SERVER_URL}/articles`, {
                    headers: {
                        // "Access-Control-Allow-Origin": true,
                        // "Authorization": "Bearer " +token
                    },
                    credentials: "include"
                })
                const data = await response.json();
                setArticles(data);
                console.log(data);
            }
            fetchData()
                }, [])


            // const filterArticles = (searchArtitcleName, searchTags) => {
                
            //     const foundArticlesByName = articles.filter(article => {
            //       return article.title.toLowerCase().includes(searchArtitcleName.toLowerCase())
            //     })
        
            //     const foundArticlesByTags = foundArticlesByName.filter(article => {
            //         return article.tag.toLowerCase().includes(searchTags.toLowerCase())
            //     })
            
        
            //     setFilteredArticles(foundArticlesByTags)
            //   }


    const postAccount = async (newAccount) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAccount),
            credentials: "include"
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
            body: JSON.stringify(customisedAccount),
            credentials: "include"
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
        <>

        <BrowserRouter>
        <div>

        {/* <head>
            <title>My Moon</title>
            
        </head>
        <body>
            <header>
                <a href="#" className="logo">Logo</a>
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Work</a></li>
                    <li> <a href="#">Home</a></li>
                </ul>
            </header>
        </body> */}



        
        <div className="navbar">
        
             <ul>
                {user ? <>
                    <li className="homeButton">
                        <Link className="linkbutton" to="/cycles">Cycles</Link>
                    </li>

                     <li className="homeButton">
                        <Link className="linkbutton" to="/articles">Articles</Link>
                     </li>

                     <li className="homeButton">
                        <Link className="linkbutton" to="/favourites">Favourites</Link>
                    </li>
                    
                    <li className="homeButton settingsButton"> <Link className="linkbutton" to="/settings">Settings</Link></li>
                
                    <li className="homeButton logoutButton" onClick={() => setUser(null)}>
                        <Link className="linkbutton" to="/">
                            Log Out
                        </Link>
                    </li>
                </> : 
                
                <>
                    <li className="loginButton" onClick={() => {setLoginModal(true)}}> 
                    Login 
                    </li>
                    {loginModal && <LoginContainer setJwt={setJwt} closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>} 
                    
                    <li className="loginButton" onClick={() => {setSignupModal(true)}}> 
                    Sign Up 
                    </li>
                    {signupModal && <RegistrationContainer setJwt={setJwt} closeModal={setSignupModal} postAccount={postAccount}/>} 
                            
                </>}
         
            </ul>

        </div> 
        

        
            <Routes>

            <Route path="article/articleinfo" element={<ArticleInfo /> } />


            <Route path="/settings" element={
                        <Settings />}
                    />
            
            <Route path="/articles" element={
                        <ArticleContainer filterArticles={filterArticles} articles={filteredArticles ? filteredArticles : articles} />}
                    />
            <Route path="/cycles" element={
                        <CycleContainer cycles={account.cycles} user={user}/>}
                    />



            <Route path="/favourites" element={
                        <Favourites user={user} />
                    }
                    />
            
            {/* <Route path="/cycles" element={
                        <CycleContainer/>}
                    /> */}

            <Route path="/questionnaire" element={<Questionnaire/>}/>

            </Routes>
           

            
               
            </div>
            
        </BrowserRouter>
        </>

     );
}
 
export default HomeContainer;