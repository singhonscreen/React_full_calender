import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import React from 'react'

let srcCalendarEl = document.getElementById('source-calendar');
let destCalendarEl = document.getElementById('destination-calendar');

let srcCalendar = new Calendar(srcCalendarEl, {
  plugins: [ interactionPlugin ],
  editable: true,
  events: [
    // event data here
  ]
});

let destCalendar = new Calendar(destCalendarEl, {
  plugins: [ interactionPlugin ],
  editable: true,
  droppable: true // will let it receive events!
});




const PracticeCalender = () => {
    return (
        <>
            
        </>
    )
}

export default PracticeCalender

 