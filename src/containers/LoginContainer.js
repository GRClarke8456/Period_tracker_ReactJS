
import { useState, useEffect, useContext, useLocalState} from 'react';
import { UserContext } from '../App';

const SERVER_URL = "http://localhost:8080";


const LoginContainer = () => {

    const[jwt, setJwt] = useLocalState("", "jwt")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const loginRequest = () => {

        const reqBody = {
            email:email,
            password:password
        };

        fetch("/api/auth/signin", {
            headers: {
                "Content-Type": "application/json",
            },
            method : "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if(response.status === 200)
            return Promise.all([response.json(), response.headers]);
            else
                return Promise.reject("Invalid login attempt");
        })
        .then(([body, headers]) => {
            setJwt(headers.get("authorization"));
            window.location.href = "/articles";
        })
        .catch((message) => {
            alert(message);
        })
    }

    

    // const [user, setUser] = useContext(UserContext)

    // const [members, setMembers] = useState([])

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await fetch(`${SERVER_URL}/api/auth/signin`)
    //         const data = await response.json();
    //         setMembers(data);
    //     }
    //     fetchData()
    // }, [])

    // let member;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setError("");
    //     if(members) {
    //         return members.find(member => {
    //             return member.email === email;
    //         })    
    //     }

    //     if(member) {
    //         setMembers(member);
    //     }
    //     else {
    //         setError("could not find account");
    //         setUser(null);
    //     }
    // }


    return ( 
        <div className="login">
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                placeholder ="enter email address"
                value={email}
                onChange = {(e) => setEmail(e.target.value)} />  
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                placeholder ="enter password"       
                value={password}      
                onChange = {(e) => setPassword(e.target.value)} />
            </div>
            
            <div>
                <button id="submit" type="button" onClick={() => loginRequest()}>
                    Login
                </button>
            </div> 
        </div>

     );
}
 
export default LoginContainer;