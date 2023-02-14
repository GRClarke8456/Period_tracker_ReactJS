
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';




const LoginContainer = () => {

    const SERVER_URL = "http://localhost:8080";

    const [user, setUser] = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [members, setMembers] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/users`)
            const data = await response.json();
            setMembers(data);
        }
        fetchData()
    }, [])

    let member;

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        if(members) {
            return members.find(member => {
                return member.email === email;
            })    
        }

        if(member) {
            setMembers(member);
        }
        else {
            setError("could not find account");
            setUser(null);
        }
    }


    return ( 
        <div className="login">
            {user ? 
            <div>
                <p>Hello!</p>
                <button type="submit" onClick={() => setUser(null)}>Logout</button>
            </div> : (
                <>
                <form onSubmit = {handleSubmit}>
                    <input type="text" placeholder ="enter email address"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder ="enter password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)} />

                    <button type="submit">Login</button>
                </form>
                <p>{error}</p>
                </>
            )}

        </div>

     );
}
 
export default LoginContainer;