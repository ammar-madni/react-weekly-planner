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