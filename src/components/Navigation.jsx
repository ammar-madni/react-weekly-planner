import { format } from "date-fns"

import Dropdown from "./Dropdown"

export default function Navigation({ showDropdown, setShowDropdown, showDayOptions, setShowDayOptions, showTimeOptions, setShowTimeOptions, timeSlots, weekdays, eventData, setEventData, date, setDate }) {

  const openDropdown = () => setShowDropdown(prev => !prev)

  return (
    <div className="flex flex-col items-center justify-between pt-10 md:flex-row">
      <button
        onClick={openDropdown}
        type="button"
        className="inline-flex items-center order-last px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm dropdown-target hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:order-first"
      >
        Add / Edit Event
        </button>

      <Dropdown
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        timeSlots={timeSlots}
        weekdays={weekdays}
        eventData={eventData}
        setEventData={setEventData}
        showDayOptions={showDayOptions}
        setShowDayOptions={setShowDayOptions}
        showTimeOptions={showTimeOptions}
        setShowTimeOptions={setShowTimeOptions}
        date={date}
        setDate={setDate}
      />
      <div className="mb-6 text-2xl font-semibold text-gray-700 md:mb-0">
        Week Starting:<br></br>
        {format(date, "do MMMM yyyy")}
      </div>
      <div className="flex mb-6 space-x-4 md:mb-0">
        <span className="">
          <button
            onClick={() => setDate(prev => {

              const previousWeek = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7)

              return previousWeek

            })}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Prev
            </button>
        </span>

        <div className="flex items-center justify-center flex-auto text-xl text-gray-700">
          Week: {format(date, "w")}
        </div>

        <span className="">
          <button
            onClick={() => setDate(prev => {

              const nextWeek = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7)

              return nextWeek

            })}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
            </button>
        </span>
      </div>

    </div>
  )
}