import { useState } from 'react'
import { startOfISOWeek, endOfISOWeek, format } from "date-fns"

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
  "0am",
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

  const startOfTheWeek = startOfISOWeek(date)
  const endOfTheWeek = endOfISOWeek(date)
  
  return (
    <div
      className="px-4 sm:px-10 container mx-auto"
    >
      <Navigation
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        date={date}
        setDate={setDate}
        startOfTheWeek={startOfTheWeek}
        endOfTheWeek={endOfTheWeek}
      />
      <Calendar
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        date={date}
        setDate={setDate}
        startOfTheWeek={startOfTheWeek}
        endOfTheWeek={endOfTheWeek}
      />
    </div>
  )
}
