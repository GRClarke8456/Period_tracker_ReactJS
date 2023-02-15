import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ArticleContainer from './containers/ArticleContainer';
import HomeContainer from './containers/HomeContainer';
import ArticleList from './components/ArticleList';
// import backgroundmoon from "./backgroundmoon.avif"; 
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);
  return (
    <>
    <UserContext.Provider value = {[user, setUser]}>
<link href='https://fonts.googleapis.com/css?family=Zeyada' rel='stylesheet'></link>

    <HomeContainer />
    </UserContext.Provider>
    </>
    
  );
}

export default App;
