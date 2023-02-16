import { Calendar,theme } from "antd";
import dayjs from "dayjs";

const Cycle = ({cycle}) => {
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
        if (dayjs(date) > dayjs(cycle.startDate) && dayjs(date) < dayjs(cycle.lastDate)){
            return (
            <ul className="periodDay">
                <li>Period</li>
            </ul>
        )}
        if (dayjs(date) > dayjs(cycle.startDate + 14) && dayjs(date) < dayjs(cycle.lastDate + 34)){
            return (
            <ul className="ovulationDay">
                <li>Ovulation</li>
            </ul>
        )}
    }
    

    return ( 
        <div className="cyclePage">
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

        </div>

        
     );
}
 
export default Cycle;