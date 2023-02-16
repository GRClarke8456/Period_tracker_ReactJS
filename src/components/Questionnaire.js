import { useState } from "react";

const Questionnaire = ({postCycle}) => {

    const [lastDate, setLastDate] = useState(new Date);
    const [startDate, setStartDate] = useState(new Date);

    // const [error, setError] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        const postBody = {
            startDate, lastDate
        }
        postCycle(postBody);
    }

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <h2>Please tell us about your last period</h2>
            <h3> Please input the start date of your last period</h3>
            <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            />

            <h3>Please input the last date of your last period</h3>
            <input
            type="date"
            placeholder="Last Date"
            value={lastDate}
            onChange={(event) => setLastDate(event.target.value)}
            />

            <h4>Why is this needed?</h4>
            <p>Our app is designed to help predict your next period.</p>
            <p>But in order to do this, we need to know the last date in order to predict accurately</p>

            <a href="/articles">Click here if you do not have periods</a>
        </form>
        </>
     );
}
 
export default Questionnaire;