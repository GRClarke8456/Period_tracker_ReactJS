import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Questionnaire = () => {

    const [lastDate, setLastDate] = useState(new Date);
    const [startDate, setStartDate] = useState(new Date);

    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);

    const postCycle = async (newCycle) => {
        const response = await fetch("http://localhost:8080/cycles/"+user.id, {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newCycle),
            credentials: "include"
        }) 
        const savedCycle = await response.json();
        navigate("/cycles")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const postBody = {
            startDate, lastDate, userId:user.id
        }
        postCycle(postBody);
        navigate("/cycles")
    }

    return ( 
        <>
        <div className="quest page">
        <form onSubmit={handleSubmit}>
            <h2 className="quest1">Please tell us about your last period 🩸</h2>

            <hr/>

            <br></br>
            <h3> Please input the start date of your last period </h3>
            <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            />

            <br></br>
            <br></br>

            <h3>Please input the last date of your last period</h3>
            <input
            type="date"
            placeholder="Last Date"
            value={lastDate}
            onChange={(event) => setLastDate(event.target.value)}
            />

            <button type="submit">OK</button>

            <br></br>
            <br></br>

            <h4>Why is this needed?</h4>
            <p>Our app is designed to help predict your next period.</p>
            <p>But in order to do this, we need to know the last date in order to predict accurately</p>

            <a href="/articles">Click here if you do not have periods</a>

           <br></br>
           <br></br>
           <br></br>

        </form>
        </div>
        </>
     );
}
 
export default Questionnaire;