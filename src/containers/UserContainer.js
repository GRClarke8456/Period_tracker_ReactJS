import UserRegistration from "../components/UserRegistration";
import UserLogin from "../components/UserLogin";
import { useEffect, useState } from "react";



const UserContainer = () => {

    const [users, setUsers] = useState();
    
    const SERVER_URL = "http://localhost:8080"

    useEffect(() => {
    const fetchData = async() => {
        const response = await fetch(`${SERVER_URL}/users`)
        const data = await response.json();
        setAllAccounts(data);
    }
    fetchData()
        }, [])


    const postAccount = async (newAccount) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAccount)
        }) 
        const savedAccount = await response.json();
        savedAccount.users = [];
        setAllAccounts([...allAccounts, savedAccount])
        setIsLoggedIn(true)
        setAccount(savedAccount);
    };




    return ( 
        <>
        < Users users ={users} />

        <Navbar postAccount={postAccount} />

        </>
     ); 
}
 
export default UserContainer;