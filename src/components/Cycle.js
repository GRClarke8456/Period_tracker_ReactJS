const Cycle = ({cycle}) => {


    return ( 
        <div>
            <p>{cycle.startDate}</p>
            <p>Emotions: {cycle.emotions}</p>
            <p>Symotoms: {cycle.symptoms}</p>
            <p>Flow: {cycle.flow}</p>
            <hr/>

        </div>

        
     );
}
 
export default Cycle;