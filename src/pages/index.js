import { useState } from 'react'
import { nextMonday } from "date-fns"

import Calendar from  "../components/Calendar"
import Navigation from  "../components/Navigation"
import database from "../database"

const weekdays = [
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su"
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

  const [date, setDate] = useState(dt)
  const [eventData, setEventData] = useState(database)

  const startOfWeek = new Date((nextMonday(date)).getFullYear(), (nextMonday(date)).getMonth(), (nextMonday(date)).getDate() - 7)
  const endOfWeek = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() +6)

  return (

    <div
      className="container mx-auto"
    >
      <Navigation
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        date={date}
        setDate={setDate}
        startOfWeek={startOfWeek}
        endOfWeek={endOfWeek}
      />
      <Calendar
        eventData={eventData}
        setEventData={setEventData}
        timeSlots={timeSlots}
        weekdays={weekdays}
        date={date}
        setDate={setDate}
        startOfWeek={startOfWeek}
        endOfWeek={endOfWeek}
      />
    </div>
        

  )
}
