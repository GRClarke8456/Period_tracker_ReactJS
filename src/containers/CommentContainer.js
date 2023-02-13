import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:8080"


const CommentContainer = () => {
    return ( 
         useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/comments`)
            const data = await response.json();
            setAllAccounts(data);
        }
        fetchData()
            }, [])
     );
}
 
export default CommentContainer;