import Cycle from "./Cycle";



const CycleList = ({cycles}) => {
  
    let CycleComponent;

    if(cycles){
        return CycleComponent = cycles.map((cycle) => {
            return <Cycle key={cycle.id}  cycle={cycle}/>
        })
    }

    return ( 
        <>
        <h2>List of Cycles!</h2>
        {CycleComponent}
       
        </>
     );
}
 
export default CycleList;