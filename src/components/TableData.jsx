import { format } from "date-fns";

import TableDataItem from "./TableDataItem"

export default function TableData({ day, time, eventData, setEventData, date, setDate }) {

  const year = [format(date, "yyyy")]
  const week = [format(date, "I")]

  const hasEvents = (() => eventData?.[year]?.[week]?.[day]?.[time])()
  
  return (
    <td
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
    </td>
  )
}

