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
import SpecificCycle from "../components/SpecificCycle";

import Favourites from "../components/Favourites";
import RegistrationContainer from "./RegistrationContainer";
import Search from "../components/Search";
import ArticleInfo from "../components/ArticleInfo";
import Questionnaire from "../components/Questionnaire";
import stars from "./stars.png";
import backgroundmoon from "./backgroundmoon.avif";
import mountains_behind from "./mountains_behind.png";
import mountains_front from "./mountains_front.png";
import moon from "./moon.png";
import logo from "./logo.png"
import MainPageContainer from "./MainPageContainer";


const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 



const HomeContainer = ({setJwt}) => {
    
const SERVER_URL = "http://localhost:8080"


     
    const [account, setAccount] = useState(false);
    const [allAccounts, setAllAccounts] = useState([]);
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [cycles, setCycles] = useState([])

    const [user, setUser] = useContext(UserContext);

    
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/cycles`, {
                credentials: "include"
            })
            const data = await response.json();
            setCycles(data);
            console.log(data);
        }
        fetchData()
            }, []);
       

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
                    credentials: "include"
                })
                const data = await response.json();
                setArticles(data);
                console.log(data);
            }
            fetchData()
                }, [])


            const filterArticles = (searchArtitcleName, searchTags) => {
                
                const foundArticlesByName = articles.filter(article => {
                  return article.title.toLowerCase().includes(searchArtitcleName.toLowerCase())
                })
        
                const foundArticlesByTags = foundArticlesByName.filter(article => {
                    return article.tag.toLowerCase().includes(searchTags.toLowerCase())
                })
            
        
                setFilteredArticles(foundArticlesByTags)
              }


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
        <Wrapper>
        <div>

    
            <header>
                <a href="#" className="logo"><img src={logo} id="logo" width={50}></img></a>

                <ul>
                {user ? <>
                    <li>
                        <Link className="linkbutton" to="/cycles">Cycles </Link>
                    </li>

                     <li>
                        <Link className="linkbutton" to="/articles"> Articles</Link>
                     </li>

                     <li>
                        <Link className="linkbutton" to="/favourites">Favourites</Link>
                    </li>
                    
                    <li> <Link className="linkbutton" to="/settings">Settings</Link></li>
                
                    <li  onClick={() => setUser(null)}>
                        <Link className="linkbutton" to="/">
                            Log Out
                        </Link>
                    </li>
                </> : 

                 <>
                   
                    <li  onClick={() => {setLoginModal(true)} }>
                    <Link className="linkbutton">
                    Login </Link>
                    </li>
                    {loginModal && <LoginContainer setJwt={setJwt} closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>} 
                    
                    <li className="linkbutton" onClick={() => {setSignupModal(true)}}> 
                    <Link className="linkbutton">
                    Sign Up </Link>
                    </li>
                    {signupModal && <RegistrationContainer setJwt={setJwt} closeModal={setSignupModal} postAccount={postAccount}/>} 
                            
                   
                    </>
                }
                </ul>

            </header>
            
        

        
            <Routes>

            <Route path="/" element={
                        <MainPageContainer />}
                    />

            <Route path="article/articleinfo" element={<ArticleInfo /> } />


            <Route path="/settings" element={
                        <Settings user={user} updateAccount={updateAccount}/>}
                    />
            
            <Route path="/articles" element={
                        <ArticleContainer filterArticles={filterArticles} articles={filteredArticles ? filteredArticles : articles} />}
                    />


            <Route path="/cycles" element={
                        <SpecificCycle  user={user}/>}
                    />



            <Route path="/favourites" element={
                        <Favourites user={user} />
                    }
                    />
            
           

            <Route path="/questionnaire" element={<Questionnaire/>}/>

            </Routes>
           

            
               
            </div>
            
            
            </Wrapper>
        </BrowserRouter>
        
        </>

     );
     
     
}
 
export default HomeContainer;





{/* <p>Your menstrual cycle helps your body prepare for pregnancy every month. It also makes you have a period if you’re not pregnant. Your menstrual cycle and period are controlled by hormones like estrogen and progesterone. Here’s how it all goes down:

You have 2 ovaries, and each one holds a bunch of eggs. The eggs are super tiny — too small to see with the naked eye.

During your menstrual cycle, hormones make the eggs in your ovaries mature — when an egg is mature, that means it’s ready to be fertilized by a sperm cell. These hormones also make the lining of your uterus thick and spongy. So if your egg does get fertilized, it has a nice cushy place to land and start a pregnancy. This lining is made of tissue and blood, like almost everything else inside our bodies. It has lots of nutrients to help a pregnancy grow.

About halfway through your menstrual cycle, your hormones tell one of your ovaries to release a mature egg — this is called ovulation. Most people don’t feel it when they ovulate, but some ovulation symptoms are bloating, spotting, or a little pain in your lower belly that you may only feel on one side.

Once the egg leaves your ovary, it travels through one of your fallopian tubes toward your uterus.

If pregnancy doesn’t happen, your body doesn’t need the thick lining in your uterus. Your lining breaks down, and the blood, nutrients, and tissue flow out of your body through your vagina. Voilà, it’s your period!

If you do get pregnant, your body needs the lining — that’s why your period stops during pregnancy. Your period comes back when you’re not pregnant anymore.

</p>
           <b></b> 

           <p>At some point during puberty, blood comes out of your vagina, and that's your first period. Most people get their first period between ages 12 and 14, but some people get them earlier or later than that. There's no way to know exactly when you’ll get it, but you may feel some PMS symptoms (link to PMS section) a few days before it happens.

If you don't get your period by the time you're 16, it’s a good idea to visit a doctor or nurse. Read more about getting your first period.

Most people stop getting their period when they’re between 45 and 55 years old — this is called menopause. Menopause can take a few years, and periods usually change gradually during this time. After menopause is totally complete, you can’t get pregnant anymore. Read more about menopause.

Your period may start and stop around the time it did for other people you’re related to, like your mom or sisters.

</p> */}