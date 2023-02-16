import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ArticleContainer from './containers/ArticleContainer';
import HomeContainer from './containers/HomeContainer';
import ArticleList from './components/ArticleList';
// import backgroundmoon from "./backgroundmoon.avif"; 
import Footer from './components/Footer';
import { createContext } from 'react';
import { useState } from 'react';
import { useLocalState } from './util/useLocalStorage';

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);
  const[jwt, setJwt] = useLocalState("jwt", "");
  // const [showContent, setShowContent] = useState(false);

  // const handleCloudyEnd = () => {
  //   setShowContent(true);
  // };

  
  
  return (
    <>
    <UserContext.Provider value = {[user, setUser]}>
<link href='https://fonts.googleapis.com/css?family=Zeyada' rel='stylesheet'></link>

    

    <div>
      <HomeContainer />
    </div>
    <Footer />
   </UserContext.Provider>
    </>
    
  );
}

export default App;
