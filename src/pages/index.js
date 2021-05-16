import { useState } from 'react'
import { format } from "date-fns"
 
import Calendar from  "../components/Calendar"
import Navigation from  "../components/Navigation"
import database from "../database"

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const timeSlots = [
  "all-day", 
  "12am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am", 
  "11am", 
  "12pm", 
  "13pm", 
  "14pm", 
  "15pm", 
  "16pm", 
  "17pm", 
  "18pm", 
  "19pm", 
  "20pm",
  "21pm",
  "22pm",
  "23pm"
]

export default function Home() {

  const dt = new Date()

  database = {
    [format(dt, "yyyy")]: {
      [format(dt, "I")]: {
        "Monday": {
          "all-day": [
            "Example event."
          ]
        }
      }
    }
  }

  const [date, setDate] = useState(dt)
  const [eventData, setEventData] = useState(database)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDayOptions, setShowDayOptions] = useState(false)
  const [showTimeOptions, setShowTimeOptions] = useState(false)

  return (

    <div
      className="container mx-auto"
    >
      <Navigation
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        showDayOptions={showDayOptions}
        setShowDayOptions={setShowDayOptions}
        showTimeOptions={showTimeOptions}
        setShowTimeOptions={setShowTimeOptions}
        date={date}
        setDate={setDate}
      />
      <Calendar
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        date={date}
        setDate={setDate}
      />
    </div>
        

  )
}
