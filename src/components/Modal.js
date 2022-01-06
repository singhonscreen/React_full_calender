import dayjs from 'dayjs';
import React, { useState } from 'react'

const Modal = ({selectHandle,setModal,deleteEventHandle,onChangeEncounter,select,setSelect,jsxdata,editDate}) => {
    console.log(jsxdata);
    const {start, end, id, title} = jsxdata
    // setSelect(title)
    let startTime = dayjs(start).format('hh mm A')
    let endTime = dayjs(end).format('hh mm A')
    const [dropDown, setDropDown] =useState(false)
    
    const patientStatus = [{title:'Well Visit'}, {title: 'New Patient'}, {title: 'Evaluation'}, {title: 'Progress'}]
      const onChangeSelectEncounter =(e)=>{
        let value = e.target.value
        onChangeEncounter(value)
      }
    return (
        <div className='modalConatiner' >
             <div className="header"><i onClick={()=>deleteEventHandle(id)} className="fas fa-times"></i></div>
             <div className="dropDownContainer">
             <ul className="dropDownList">
             <input type="text" className="dropDownItem1" onChange={(e)=>onChangeSelectEncounter(e)} value={select} onClick={()=>setDropDown(!dropDown)} />
             { 
                patientStatus.map((item)=>(
                     dropDown?<li key={item.title} onClick={()=>selectHandle(item) } className="dropDownItem">{item.title} </li> : null
                     
                     ))
                    }
                    </ul>
             </div>
            <p>{startTime} - {endTime}</p>
            <button className='btn' onClick={()=>editDate(id,start,end,select)} >Submit</button>
        </div>
    )
}

export default Modal
