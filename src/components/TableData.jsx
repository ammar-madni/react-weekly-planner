import { format } from "date-fns";

import TableDataItem from "./TableDataItem"

export default function TableData({ eventData, setEventData, date, setDate, daysOfTheWeek }) {
  
  return (
    <div className="grid grid-cols-7 my-6 bg-pink-400">
      {daysOfTheWeek.map(day =>
        <TableDataItem
          eventData={eventData}
          setEventData={setEventData}
          date={date}
          setDate={setDate}
          day={day}
        />
      )}
    </div>
  )
}

{/* <td
className="px-6 py-3 space-y-2"
>
{hasEvents?.map((event,index) => 
  <TableDataItem
    key={`${index} ${event}`}
    event={event}
    index={index}
    day={day}
    time={time}
    eventData={eventData}
    setEventData={setEventData}
    date={date}
    setDate={setDate}
  />
)}     
</td> */}

