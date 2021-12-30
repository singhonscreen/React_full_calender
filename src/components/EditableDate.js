import React, { useState } from 'react'
// import dayjs from 'dayjs';

const EditableDate = ({state1, editDate,setIseditable}) => {
    const {start, end, id} = state1
    var strStartDate = start;
    // debugger;
    // var startdate = dayjs(strStartDate).format('h:mm A')
    var startdate = strStartDate.substring(0, 19);
    var strEndDate = end;
    // var enddate = dayjs(strStartDate).format('h:mm A')
    var enddate = strEndDate.substring(0, 19);
    // var enddate = strEndDate.substring(0, 19);
    
    const [startTime, setStartTime] = useState(startdate)
    const [endTime, setEndTime] = useState(enddate)
    return (
        <div className='editContainer'>
        <div className="header"><i onClick={()=>setIseditable(false)} className="fas fa-times"></i></div>
            <div className="inputContainer">
            <div className="timeContainer">
            <label>Start Time</label>
            <input type="datetime-local"  value= {startTime} onChange={(e)=>setStartTime(e.target.value)}/>
            </div>
            <div className="timeContainer">
            <label>End Time</label>
            <input type="datetime-local" value= {endTime} onChange={(e)=>setEndTime(e.target.value)}/>
            </div>
            <div className="btnContain">
            <input type="button" value="Submit" onClick={()=>editDate(id,startTime,endTime)}  />
            <input type="button" value="Cancel" onClick={()=>setIseditable(false)}  />
            </div>
            </div>
        </div>
    )
}

export default EditableDate

