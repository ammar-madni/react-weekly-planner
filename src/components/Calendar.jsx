import { eachDayOfInterval, format } from "date-fns"
import TableData from "./TableData"

export default function Calendar({ eventData, setEventData, date, setDate, startOfTheWeek, endOfTheWeek }) {

  const daysOfTheWeek = eachDayOfInterval({
    start: startOfTheWeek,
    end: endOfTheWeek
  })

  return (
    <div className="flex flex-col overflow-x-auto mb-20 border-gray-300 rounded-md xl:border-[1px]">
      <div className="flex-auto flex space-x-8 xl:space-x-0 xl:divide-x xl:divide-gray-300">
        {daysOfTheWeek.map(day =>
          <TableData
            key={`${day} tabledata`}
            eventData={eventData}
            setEventData={setEventData}
            date={date}
            setDate={setDate}
            daysOfTheWeek={daysOfTheWeek}
            day={day}
          />
        )}
      </div>

    </div>
  )
}