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

    const monthCellRender = (date) => {
        if (dayjs(date) > dayjs(cycle.startDate) && dayjs(date) < dayjs(cycle.lastDate)){
            return (
            <ul className="periodDay">
                <li>Period month</li>
            </ul>
            )}
      };
    

    // calendar period days
    const dateCellRender= (date) => {
        if (dayjs(date) > dayjs(cycle.startDate) && dayjs(date) < dayjs(cycle.lastDate)){
            return (
            <ul className="periodDay">
                <li>Period</li>
            </ul>
        )}
    }
    

    return ( 
        <div className="cyclePage">
            <p>Start date:{cycle.startDate}</p>
            <p>End date:{cycle.lastDate}</p>
            <p>Emotions: {cycle.emotions}</p>
            <p>Symotoms: {cycle.symptoms}</p>
            <p>Flow: {cycle.flow}</p>
            <hr/>
            <div className="calendarBox">
                <div className="calendar" style={wrapperStyle}>
                {/*      <Calendar fullscreen={true} onPanelChange={onPanelChange}  */}
                    <Calendar 
                    
                    dateCellRender={dateCellRender} 
                    monthCellRender={monthCellRender}
                    />
                </div>  
            </div>

        </div>

        
     );
}
 
export default Cycle;