import TableData from "./TableData"

export default function Calendar({ timeSlots, weekdays, eventData, setEventData, date, setDate }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="divide-x">
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                  </th>
                  {weekdays.map(day => (
                    <th
                      key={day}
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timeSlots.map((timeSlot, index) => (
                  <tr key={index} className="divide-x">
                    <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      {timeSlot}
                    </td>
                    {weekdays.map((day, index2) => (
                      <TableData
                        key={`${index} ${index2}`}
                        day={day}
                        time={timeSlot}
                        eventData={eventData}
                        setEventData={setEventData}
                        date={date}
                        setDate={setDate}
                      />
                    ))}
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}