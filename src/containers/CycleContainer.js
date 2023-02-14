import { useEffect, useState } from "react";
import CycleList from "../components/CycleList";

const SERVER_URL = "http://localhost:8080"

const CycleContainer = () => {

    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/cycles`)
            const data = await response.json();
            setCycles(data);
            console.log(data);
        }
        fetchData()
            }, [])


    return (
        <>
        {cycles ? <CycleList cycles={cycles}/> : ""}
        </>
         
     );
}
 
export default CycleContainer;