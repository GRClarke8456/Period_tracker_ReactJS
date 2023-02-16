import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar,theme } from "antd";
import dayjs from "dayjs";

const SpecificCycle = ({cycles, user}) => {

    const[hasCycle, setHasCycle] = useState(false);

    const {id} = useParams();

    // let CycleComponent;

    // if(cycles){
    //     return CycleComponent = cycles.map((cycle) => {
    //         return <Cycle key={cycle.id}  cycle={cycle}/>
    //     })
    // }


    useEffect(() => {
        if (user) {
      const cycleUploaded = doTheyHaveACycle(id);
        setHasCycle(cycleUploaded);     
        }
    }, []);

    const doTheyHaveACycle = (cycleID) => {
        let check = false;
        for (const cycleUploaded of user.cycles) {
          if (cycleUploaded.id === cycleID) {
            check = true;
          }
        }
        return check;
      };

      // calendar
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
// calendar styling
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 700,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };

// calendar period days
    const dateCellRender= (date) => {
        let period = false;
        let ovulation = false;
        user.cycles.forEach((cycle) =>{
            const startDate = dayjs(cycle.startDate);
            const ovulationDay = startDate.subtract(14, 'day');
            const ovulationEnd = startDate.subtract(13, 'day');
            const endDate = dayjs(cycle.lastDate);
            // const c = endDate(14, 'day')
            if (dayjs(date) > startDate && dayjs(date) < endDate){
                period = true;
               }
            if (dayjs(date) > ovulationDay && dayjs(date) < ovulationEnd){
                ovulation = true;
            }

         })
        if (period) {
         return (
            <ul className="periodDay">
                <h4>Period</h4>
            </ul>
        ) }
        if (ovulation){
            return (
                <ul className="ovulationDay">
                    <li>Ovulation Day</li>
                </ul>
        )}

    }
    


    return ( <>
    <h3>Your Cycle</h3>
    <section className="cyclePage">
            {user ? user.cycles.map((cycle) => {
                return <>
            <div className="cycleInfo">
            <p className="startDate">Cycle Information:</p>
            <p>Start date: {cycle.startDate}</p>
            <p>End date: {cycle.lastDate}</p>
            <p>Emotions: {cycle.emotions}</p>
            <p>Symptoms: {cycle.symptoms}</p>
            <p>Flow: {cycle.flow}</p>
            <hr/>
            </div>
           
            </>
        }):""
        }
         <div className="calendarBox">
                <div className="calendar" >
                {/* <div className="calendar" style={wrapperStyle}> */}
                {/*      <Calendar fullscreen={true} onPanelChange={onPanelChange}  */}
                    <Calendar 
                    
                    dateCellRender={dateCellRender} 
                    />
            </div>  
              
            </div>
            
        </section>


    </> );
}
 
export default SpecificCycle;