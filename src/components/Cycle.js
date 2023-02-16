import { Calendar,theme } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Cycle = ({cycle, user}) => {

// get users speific cycles
    // const[userCycle, setUserCycle] = useState(false);

    // const {id} = useParams();

    // useEffect(() => {
    //     if (user) {
    //         const userCycle = getUserCycles(id);
    //         setUserCycle(userCycle);
    //     }
    // }, []);


    // const getUserCycles = (cycleId) => {
    //     let check = false;
    //     for (const cycleLiked of user.cycle){
    //         if (cycleLiked.id === cycleId) {
    //             check = true;
    //         }
    //     }
    //     return check;
    // }





    
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
        const startDate = dayjs(cycle.startDate);
        const ovulationDay = startDate.subtract(14, 'day');
        const ovulationEnd = startDate.subtract(13, 'day');
        const endDate = dayjs(cycle.lastDate);
        // const c = endDate(14, 'day')
        if (dayjs(date) > startDate && dayjs(date) < endDate){
            return (
            <ul className="periodDay">
                <h4>Period</h4>
            </ul>
        )}
        if (dayjs(date) > ovulationDay && dayjs(date) < ovulationEnd){
            return (
            <ul className="ovulationDay">
                <li>Ovulation Day</li>
            </ul>
        )}
        
    }
    

    return ( 
<<<<<<< HEAD
        <>
        <section className="cyclePage">
            {user ? user.cycle.map((cycle) => {
                return <>
=======
        <div className="cyclePage page" >
>>>>>>> RimmBranch
            <div className="cycleInfo">
            <p className="startDate">Cycle Information:</p>
            <p>Start date: {cycle.startDate}</p>
            <p>End date: {cycle.lastDate}</p>
            <p>Emotions: {cycle.emotions}</p>
            <p>Symptoms: {cycle.symptoms}</p>
            <p>Flow: {cycle.flow}</p>
            <hr/>
            </div>
            <div className="calendarBox">
                <div className="calendar" >
                {/* <div className="calendar" style={wrapperStyle}> */}
                {/*      <Calendar fullscreen={true} onPanelChange={onPanelChange}  */}
                    <Calendar 
                    
                    dateCellRender={dateCellRender} 
                    />
            </div>  
              
            </div>
            
            </>
        }):""
        }
        </section>
</>
        
     );
}
 
export default Cycle;