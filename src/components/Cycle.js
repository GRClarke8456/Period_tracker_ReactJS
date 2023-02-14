


const Cycle = ({cycle}) => {
    return ( 
        <div>
            <p>{cycle.startDate}</p>
            <p>{cycle.emotions}</p>
            <p>{cycle.symptoms}</p>
            <p>{cycle.flow}</p>
            <hr/>

        </div>
     );
}
 
export default Cycle;