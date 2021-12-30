import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import EditableDate from "./EditableDate";

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2021-12-22T10:00:00",
    end: "2021-12-22T10:15:00",
  },
  {
    id: 2,
    title: "event 2",
    start: "2021-12-21T13:00:00",
    end: "2021-12-21T14:00:00",
  },
];
function getTimeZone() {
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
  console.log(o);
  console.log(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
function FullCalendarApp() {
  const [state, setState] = useState(events);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [isModal, setModal] = useState(false);
  const [endTime, setendTime] = useState("");
  const [select, setSelect] = useState("Select");
  const [iseditable, setIseditable] = useState(false);
  const [event_Color, setEvent_Color] = useState("");
  const [myTime, setMyTime] = useState(null)
  const [myTime1, setMyTime1] = useState(null)
  const [range,setRange] = useState({start:new Date(), end: new Date() })
  console.log(myTime1);
  console.log(myTime);
console.log(endTime);
 function increasedate(){
    if (select === "Well Visit") {
      setMyTime(myTime1 + 600000);
    } else if (select === "New Patient") {
      setMyTime(myTime1 + 1800000);
    } else if (select === "Evaluation") {
      setMyTime(myTime1 + 1200000);
    } else if (select === "Progress") {
      setMyTime(myTime1 + 900000);
    }
  }
  function dynamicDate(){
    var enddate = new Date(myTime);
    var d = enddate,
    dformat = [d.getFullYear(),
                     (d.getMonth()+1),
                   d.getDate()
                  ].join('-')+
        'T' +
        [ ("00" + d.getHours()).slice(-2),
         ("00" + d.getMinutes()).slice(-2),
         ("00" + d.getSeconds()).slice(-2)].join(':')+getTimeZone();
    setendTime(dformat);
  }
  const handleDateClick = (arg) => {
    setModal(true);
    const maindate = Date.parse(arg.dateStr);
    setMyTime1(maindate)
    setState2(arg.dateStr);
  };
  
  
  const selectHandle = (elem) => {
    setSelect(elem);
   
  };

  useEffect(() => {
    increasedate()
    dynamicDate()
    event_color();
  }, [selectHandle]);

  const submitData = () => {
   
    if (isModal && select === "Select") {
      alert("Please Choose 1");
      return null;
    }
    //   if(iseditable){
    //   state.map((elem)=>{
    //     if(elem.id === getId){

    //       elem.title = "hemant"
    //       console.log(elem.title, "item")
    //       return {...elem, title:'Avadhesh' }
    //     }
    //   })
    //     console.log(state, "stateedited")
    //     setIseditable(false)
    //  }
    if (isModal) {
      setState([
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: select,
          start: state2,
          end: endTime,
          canDrop: true,
          overlap: false,
          rendering: "background",
          color: event_Color,
        },
      ]);
    }
    setModal(false);
  };

  const editHandle = (id) => {
    const editEvent = state.filter((elem) => {
      return elem.id == id;
    });
    setState1(editEvent[0]);
    setIseditable(true);
  };

  const editDate = (id, start, end) => {
    debugger;
    if (iseditable ) {
      const asb = state.map((elem) => {
        if (elem.id === id) {
          elem.start = start;
          elem.end = end;
        }
        return elem;
      });
      setState([...state, asb]);
    }
    setIseditable(false);
  };
  const event_color = () => {
    if (select === "Well Visit") {
      setEvent_Color("grey");
    } else if (select === "New Patient") {
      setEvent_Color("red");
    } else if (select === "Evaluation") {
      setEvent_Color("green");
    } else if (select === "Progress") {
      setEvent_Color("blue");
    }
  };

  // const injectCellComponent = (args)=>{
  
  // }

  // const saveRecords = (date)=>{
  //   alert(`you clicked on ${date}`)
  // }

  const setDateRange = (DatesSetArg)=>{
     setRange({start:DatesSetArg.start, end: DatesSetArg.end })
  }
// console.log(range);
const handleEventRecieve =()=>{
  alert( 'event changed');
}
const handleDrop = (info)=>{
  // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
  editDate()
}
const eventContentHandle = ()=>{
  return 
}

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable={true}
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
        }}
        // eventLimit = {true} // for all non-TimeGrid views
        // weekends={false}
        firstDay='1'
        slotDuration= '00:30:00' 
        // slotLabelInterval= '00:15:00' 
        slotMinTime = "07:00:00"
        slotMaxTime = "20:00:00"
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        // droppable= {true}
        eventDrop={handleDrop}
        eventReceive={()=>handleEventRecieve()}
        datesSet={setDateRange}
        // dayCellContent = {injectCellComponent}
        allDaySlot={false}
        eventContent={eventContentHandle}
        events={state}
        nowIndicator
        dateClick={(arg) => handleDateClick(arg)}
        eventClick={(e) => editHandle(e.event.id)}
      />
      {isModal ? (
        <Modal
          selectHandle={selectHandle}
          state1={state1}
          select={select}
          setSelect={setSelect}
          state2={state2}
          setState2={setState2}
          setState1={setState1}
          setModal={setModal}
          submitData={submitData}
        />
      ) : (
        ""
      )}
      {iseditable ? (
        <EditableDate
        setIseditable={setIseditable}
          editDate={editDate}
          state1={state1}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default FullCalendarApp;
