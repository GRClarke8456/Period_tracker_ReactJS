import { useEffect, useState } from "react";
import CycleList from "../components/CycleList";

const CycleContainer = () => {

    const SERVER_URL = "http://localhost:8080"


    const [cycles, setCycles] = useState([]);
    const [allCycles, setAllCycles] = useState([]);
    const [cycle, setCycle] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/cycles`, {
                credentials: "include"
            })
            const data = await response.json();
            setCycles(data);
            console.log(data);
        }
        fetchData()
            }, [])
            

        const postCycle = async (newCycle) => {
            const response = await fetch("http://localhost:8080/cycles", {
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(newCycle),
                credentials: "include"
            }) 
            const savedCycle = await response.json();
            savedCycle.cycles = [];
            setCycle([...allCycles, savedCycle])
            // setIsLoggedIn(true) 
            setCycle(savedCycle);
        };
        // const postCycle = async (newCycle) => {
        //     const response = await fetch("http://localhost:8080/cycles", {
        //         method: "POST",
        //         headers: {'Content-Type' : 'application/json'},
        //         body: JSON.stringify(newCycle)
        //     }) 
        //     const savedCycle = await response.json();
        //     savedCycle.cycles = [];
        //     setCycle([...allCycles, savedCycle])
        //     // setIsLoggedIn(true) 
        //     setCycle(savedCycle);
        // };


    return (
        <>
        <div>
            <h3>Cycle Calender</h3>
        </div>
        <section>
        {cycles ? <CycleList cycles={cycles}/> : ""}
        </section>
        </>
         
     );
}
 
export default CycleContainer;