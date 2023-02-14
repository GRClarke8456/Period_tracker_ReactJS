import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ArticleContainer from './containers/ArticleContainer';
// import backgroundmoon from "./backgroundmoon.avif"; 

function App() {
  return (
    <>


    <Navbar />


    < UserLogin />
    <UserRegistration /> 
    <ArticleContainer /> 
    </>
  );
}

export default App;
