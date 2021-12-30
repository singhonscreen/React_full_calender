import React from 'react';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import Modal from './Modal';

// import { formatDate } from '@fullcalendar/react';
const Calenderfull = ({state1, state,state2, setState2, setState1,submitData ,handleDateClick,isModal }) => {

// let str = formatDate(new Date(), {
//   month: 'long',
//   year: 'numeric',
//   day: 'numeric'
// });

// console.log(str);


    return (
        <div className='fullCalenderContainer' >
        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        editable={true}
        weekends={false}
        events={state}
          dateClick={arg=>handleDateClick(arg)}
      />
      {
        isModal ? 
        <Modal state1={state1} state2={state2} setState2={setState2} setState1={setState1} submitData={submitData} /> :''
      }
        </div>
    )
}

export default Calenderfull


// let tempState = state;
//     state.map((item, i) => {
//       if (item.id === id) {
//         console.log(item.id, id, start, end);
//         tempState[i].start = start;
//         tempState[i].end = end;
//       }
//       return item;
//     });
//     console.log(tempState);
//     setState(tempState);
//   };