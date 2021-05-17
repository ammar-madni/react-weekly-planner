import { format } from "date-fns"

import Event from "./Event"

export default function Events({ eventData, setEventData, date, setDate, day, hour }) {
 
  const year = [format(date, "yyyy")]
  const week = [format(date, "I")]

  const hasEvents = (() => eventData?.[year]?.[week]?.[format(day, "EEEE")]?.[hour])()
 
  return (
    <>
      {hasEvents?.map((event, index) => (
        <div
          key={`${event} ${index} wrapper`}
          className="mt-4 xl:p-4"
        >
          <div className="uppercase text-sm">
            {hour}
          </div>
          <Event
            key={`${event} ${index}`}
            eventData={eventData}
            setEventData={setEventData}
            date={date}
            setDate={setDate}
            day={day}
            hour={hour}
            event={event}
            index={index}
          />
        </div>
      ))}
    </>
  )
}