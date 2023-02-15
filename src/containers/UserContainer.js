import UserRegistration from "../components/UserRegistration";
import UserLogin from "../components/UserLogin";
import { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";


const UserContainer = ({postAccount}) => {

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


   




    return ( 
        <>
        <UserRegistration postAccount={postAccount} />

        </>
     ); 
}
 
export default UserContainer;