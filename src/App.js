import './App.css';
import Footer from './components/Footer';
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
    {/* <ArticleContainer />  */}


    <Footer></Footer>
    </>
  );
}

export default App;
