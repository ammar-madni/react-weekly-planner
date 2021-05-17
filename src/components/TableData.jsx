import { isToday } from "date-fns"

import TableDataItem from "./TableDataItem"

export default function TableData({ eventData, setEventData, date, setDate, daysOfTheWeek, day }) {
  
  return (
    <div
      className={isToday(day) ? "flex-auto flex flex-col items-center min-w-[fit-content] pb-10 overflow-hidden  xl:bg-yellow-50 xl:min-h-[40rem] md:min-h-[30rem]" : "flex-auto flex flex-col items-center min-w-[fit-content] pb-10 overflow-hidden xl:min-h-[40rem] md:min-h-[30rem]"}
    >
      <TableDataItem
        key={`${day} tabledataitem`}
        eventData={eventData}
        setEventData={setEventData}
        date={date}
        setDate={setDate}
        day={day}
      />
    </div>
  )
}