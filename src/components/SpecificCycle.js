import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar,theme } from "antd";
import dayjs from "dayjs";
// import calendaricon from '../calendaricon.jpeg';


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
      width: 500,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };

// calendar period days
    const dateCellRender= (date) => {
        let period = false;
        let ovulation = false;
        let prediction = false;
        // const startDate = dayjs(cycle.startDate);
        //     const endDate = dayjs(cycle.lastDate);
        user.cycles.forEach((cycle) =>{
            const startDate = dayjs(cycle.startDate);
            const endDate = dayjs(cycle.lastDate);
            const cycleLength = startDate.diff(endDate, 'day', true)
            const ovulationDay = startDate.subtract(14, 'day');
            const ovulationEnd = startDate.subtract(13, 'day');
            const predictionStart = endDate.add(14, 'day');
            const predictionEnd = endDate.add(21, 'day');
            
            
            if (dayjs(date) > startDate && dayjs(date) < endDate){
                period = true;
               }
            if (dayjs(date) > ovulationDay && dayjs(date) < ovulationEnd){
                ovulation = true;
            }
           
            if (dayjs(date) > predictionStart && dayjs(date) < predictionEnd){
                prediction = true;
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
            <h5>Ovulation Day</h5>
        )}
        if (prediction){
            return (
            <h5 className="predictionDot">Next period</h5>
        )}
       
    }

    

    

    return ( 
    <>
    <h3 className="page">Your Cycle</h3>

        <a href="#cyclePage" id="btn2">
            {/* <img src={calendaricon}></img>  */}
            <img src="https://www.freeiconspng.com/thumbs/calendar-icon-png/calendar-icon-business-3.png" width={60}></img>
            </a>
    <br></br>

    <div class="period-circle">
    <div class="period-text">2 days until your period</div>
    {/* <div class="period-dot"></div> */}
    </div>





    <br></br>
    <section className="cyclePage" id="cyclePage">

    <h3>Cycle</h3>
    <div className="calendarBox">
        <h2>Cycle History</h2>

            <div className="periodKey">
            <h4>Ovulation day</h4>
            <h5>The ovulation date is when an egg is released from the ovary and can potentially be fertilised. This is an estimate, calculated 14 days before menstruation. </h5>
            </div>
            
            <div className="periodKey">
            <h5 className="periodDot">period dot key</h5>    
            <h5>The red dots represent the days of your period</h5>
            <h5 className="predictionDot">period dot key</h5>    
            <h5>The gray dots represent your next period prediction, based off of a typical 28 day cycle</h5>
            </div>
                <div className="calendar" >
                {/* <div className="calendar" style={wrapperStyle}> */}
                {/*      <Calendar fullscreen={true} onPanelChange={onPanelChange}  */}
                    <Calendar 
                    dateCellRender={dateCellRender} 
                    />
            </div>  
              
        </div>
        <div className="tableHeader">
        <h2>Symptoms Journal</h2>
        <h5>About 8 in 10 people say they experience one or more premenstrual symptoms, and about 1 in 10 people experience symptoms significant enough to warrant a clinical diagnosis of PMS, though estimates vary. 
            Despite being common, scientists still aren’t sure exactly why PMS happens — or why some people have symptoms while others don’t.
            People may experience different premenstrual symptoms from cycle to cycle, as the presence of symptoms may be affected by diet, exercise, and stress</h5>
        <div className="cycleInfo">
        <p>Start date</p>
        <p>End date</p>
        <p>Emotions</p>
        <p>Symptons</p>
        <p>Flow</p>
        </div>

        </div>
            {user ? user.cycles.map((cycle) => {
                return <>
                 {/* <p className="startDate">Cycle History:</p> */}
            <div className="cycleInfo">
                <p>{cycle.startDate}</p>
                <p>{cycle.lastDate}</p>
                <p className="emotions"> {cycle.emotions}</p>
                <p className="symptons"> {cycle.symptoms}</p>
                <p className="flow"> {cycle.flow}</p>
                {/* <hr/> */}
            </div>
           
            </>
        }):""
        }
         

      
        </section>


    </> );
}
 
export default SpecificCycle;