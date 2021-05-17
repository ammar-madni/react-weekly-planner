import { eachHourOfInterval, isToday, format } from "date-fns";
import { merge as _merge } from "lodash"

import Events from "./Events"

export default function TableDataItem({ eventData, setEventData, date, setDate, day }) {

  const hoursInTheDayAsDate = (eachHourOfInterval({
    start: (new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0)),
    end: (new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23))
  }))

  const hoursOfTheDay = hoursInTheDayAsDate.map(hour => format(hour, "Haaa"))

  hoursOfTheDay.unshift("all-day");

  console.log(day)

  return (
    <>
      <div
        className={isToday(day) ? "w-full text-center text-gray-500 uppercase text-lg py-4 px-6 bg-indigo-100 xl:bg-gray-100 rounded-md xl:rounded-none border-gray-300 border-b-[1px] h-[fit-content]" : "w-full text-center text-gray-500 uppercase text-lg py-4 px-6 bg-gray-100 rounded-md xl:rounded-none border-gray-300 border-b-[1px] h-[fit-content]"}
      >
        {format(day, "EEE d")}
      </div>
      {hoursOfTheDay.map(hour => (
        <div
          key={`${hour} timeSlot`}
          className="w-full flex flex-col space-y-2 text-gray-500"
        >
          <Events
            key={`${day} tabledataitem`}
            eventData={eventData}
            setEventData={setEventData}
            date={date}
            setDate={setDate}
            day={day}
            hour={hour}
          />
        </div>
      ))}
    </>
  )
}