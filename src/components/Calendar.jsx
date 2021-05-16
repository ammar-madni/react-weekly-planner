import { eachDayOfInterval, format } from "date-fns"
import TableData from "./TableData"

export default function Calendar({ timeSlots, weekdays, eventData, setEventData, date, setDate, startOfWeek, endOfWeek }) {

  const daysOfTheWeek = eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeek
  }).map(day => format(day, "EEE d"))

  return (
    <div className="flex flex-col">
      <div className="flex divide-x divide-gray-300 bg-gray-200 rounded-md">
        {daysOfTheWeek.map(day =>
          <div
            key={day}
            className="flex-auto text-gray-500 font-bold uppercase py-2 px-6"
          >
            {day}
          </div>
        )}
      </div>
      <TableData
        eventData={eventData}
        setEventData={setEventData}
        date={date}
        setDate={setDate}
        daysOfTheWeek={daysOfTheWeek}
      />
    </div>
  )
}

// {weekdays.map(day => (
//   <th
//     key={day}
//     scope="col"
//     className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
//   >
//     {day}
//   </th>
// ))}

// {timeSlots.map((timeSlot, index) => (
// <tr key={index} className="divide-x">
//   <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
//     {timeSlot}
//   </td>
//   {weekdays.map((day, index2) => (
//     <TableData
//       key={`${index} ${index2}`}
//       day={day}
//       time={timeSlot}
//       eventData={eventData}
//       setEventData={setEventData}
//       date={date}
//       setDate={setDate}
//     />
//   ))}
// </tr>
// ))}