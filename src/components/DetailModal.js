import React from 'react'
import dayjs from 'dayjs';

const DetailModal = ({setDetailModal,setIseditable,state1,deleteEventHandle, event_Color}) => {
    const {start, end, title, id} = state1;
    var strStartDate = start;
    var fullDate = dayjs(strStartDate).format('MMMM D, YYYY')
    var startdate = dayjs(strStartDate).format('h:mm A')
    var strEndDate = end;
    var enddate = dayjs(strEndDate).format('h:mm A')
    return (
        <div className='editContainer'>
        <div className="editbtnContainer">
        <div className="headerModal" onClick={()=>setIseditable(true)} ><i  className="fas fa-pencil"></i></div>    
        <div className="headerModal" onClick={()=>deleteEventHandle(id)} ><i  className="fas fa-trash"></i></div>    
        <div className="headerModal" onClick={()=>setDetailModal(false)}><i  className="fas fa-times"></i></div>    
        </div>
        <div className="eventContainer">
        <div style={{color:event_Color}} className="title"><h4>{title}</h4></div>
        <div className="deatailsModal">
        <div className="fulldate"><h3>{fullDate}</h3></div>
        <div className="showTime"><h5>{startdate} - {enddate}</h5> </div>
        </div>
        </div>

        </div>
    )
}

export default DetailModal
