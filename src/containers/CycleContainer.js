import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:8080"


const CycleContainer = () => {

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/cycles`)
            const data = await response.json();
            setAllAccounts(data);
        }
        fetchData()
            }, [])


    // return ( 
         
    //  );
}
 
export default CycleContainer;