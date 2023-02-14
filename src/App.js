import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ArticleContainer from './containers/ArticleContainer';
import CycleContainer from './containers/CycleContainer';
// import backgroundmoon from "./backgroundmoon.avif"; 

function App() {
  return (
    <>


    <Navbar />


    < UserLogin />
    <UserRegistration /> 
    <ArticleContainer /> 
    <CycleContainer />
    </>
  );
}

export default App;
