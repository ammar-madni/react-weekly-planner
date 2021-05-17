import { useState } from "react"
import { format } from "date-fns"

import Dropdown from "./Dropdown"

export default function Navigation({ timeSlots, weekdays, eventData, setEventData, date, setDate, startOfTheWeek, endOfTheWeek }) {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(prev => !prev)

  return (
    <div className="flex flex-col py-6 md:py-14 space-y-10">
      <div className="flex-auto flex flex-col md:flex-row items-center justify-between">
        <button
          onClick={toggleDropdown}
          type="button"
          className="uppercase inline-flex items-center order-last px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm dropdown-target hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:order-first"
        >
          New Event
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={!showDropdown ? "h-5 w-5 ml-2 dropdown-target" : "ml-2 h-5 w-5 dropdown-target transform rotate-45"} viewBox="0 0 20 20" fill="currentColor">
            <path className="dropdown-target" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>

        </button>
        <div className="flex flex-col space-y-1 mb-6 md:mb-0">
          <div className="flex-auto text-center text-sm tracking-wider font-bold text-gray-700">{format(date, "yyyy")}</div>
          <div className="flex-auto mb-6 text-2xl text-center text-gray-700 md:mb-0">
            {format(startOfTheWeek, "do MMM")} - {format(endOfTheWeek, "do MMM")}
          </div>
        </div>
        <div className="flex mb-6 space-x-4 md:mb-0">
          <span className="">
            <button
              onClick={() => setDate(prev => {
                const previousWeek = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7)

                return previousWeek
              })}
              type="button"
              className="uppercase inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </span>
          <span className="">
            <button
              onClick={() => setDate(prev => {

                const nextWeek = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7)

                return nextWeek

              })}
              type="button"
              className="uppercase inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <Dropdown
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          timeSlots={timeSlots}
          weekdays={weekdays}
          eventData={eventData}
          setEventData={setEventData}
          date={date}
          setDate={setDate}
        />
    </div>
  )
}