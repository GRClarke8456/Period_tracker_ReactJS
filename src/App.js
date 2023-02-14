import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ArticleContainer from './containers/ArticleContainer';
// import backgroundmoon from "./backgroundmoon.avif"; 
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);
  return (
    <div>
      <UserContext.Provider value = {[user, setUser]}>
    <Navbar />
    < UserLogin />
    <UserRegistration /> 
    {/* <ArticleContainer />  */}
    </UserContext.Provider>
    <ArticleContainer /> 
    </div>
  );
}

export default App;
