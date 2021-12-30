import React, { useState } from 'react'

const Modal = ({selectHandle,setModal,submitData,select}) => {
    const [dropDown, setDropDown] =useState(false)
    
    const patientStatus = [{title:'Well Visit'}, {title: 'New Patient'}, {title: 'Evaluation'}, {title: 'Progress'}]
    
  
    

    return (
        <div className='modalConatiner' >
             <div className="header"><i onClick={()=>setModal(false)} className="fas fa-times"></i></div>
             <div className="dropDownContainer">
             <ul className="dropDownList">
             <li className="dropDownItem1" onClick={()=>setDropDown(!dropDown)} >{select} <i className="fas fa-chevron-circle-down"></i></li>

             { 
                patientStatus.map((item)=>(
                     dropDown?<li key={item.title} onClick={()=>selectHandle(item.title) } className="dropDownItem">{item.title} </li> : null
                     
                     ))
                    }
                    </ul>
             </div>
           
            <button className='btn' onClick={submitData} >Submit</button>
        </div>
    )
}

export default Modal
