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
    return ( 
        <div>
            <p>Start date:{cycle.startDate}</p>
            <p>End date:{cycle.lastDate}</p>
            <p>Emotions: {cycle.emotions}</p>
            <p>Symotoms: {cycle.symptoms}</p>
            <p>Flow: {cycle.flow}</p>
            <hr/>
            
             <div className="calender" style={wrapperStyle}>
             {/*      <Calendar fullscreen={true} onPanelChange={onPanelChange}  */}
                <Calendar 
                // onSelect={(date) => {
                //     console.log("selected date", date);
                // }}
                dateCellRender={(date) => {
                    if (dayjs(date) > dayjs(cycle.startDate) && dayjs(date) < dayjs(cycle.lastDate)){
                        return <h6>Period</h6>
                    }
                }}
                />
            </div>  
            

        </div>

        
     );
}
 
export default Cycle;