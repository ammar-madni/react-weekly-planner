import { useState } from "react"
import produce from "immer"
import { format } from "date-fns"

export default function Dropdown({ showDropdown, setShowDropdown, showDayOptions, setShowDayOptions, showTimeOptions, setShowTimeOptions, weekdays, timeSlots, eventData, setEventData, date, setDate }) {

  const week = format(date, "w")

  const [showError, setShowError] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)

  const dayOptionsClick = () => setShowDayOptions(prev => !prev)
  const timeOptionsClick = () => setShowTimeOptions(prev => !prev)
  const handleSave = e => {

    if (selectedDay != null && selectedTimeSlot != null) {

      setShowError(false)
      const nextState = produce(eventData, draft => { draft[week][selectedDay][selectedTimeSlot] = e.target.value })
      setEventData(nextState)

    } else {

      setShowError(true)

    }

  }



  return (
    <>
      {showDropdown ?
        <div className="absolute z-30 mt-48 dropdown-target md:mt-28">
          <div className="relative inline-block mr-2 text-left dropdown-target">
            <div>
              <button onClick={timeOptionsClick} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dropdown-target hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {selectedTimeSlot ? selectedTimeSlot : "Time"}
                <svg className="w-5 h-5 ml-2 -mr-1 dropdown-target" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {showTimeOptions ?


              <div className="absolute left-0 z-20 mt-2 origin-top-right bg-white rounded-md shadow-lg dropdown-target ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 dropdown-target" role="none">
                  {timeSlots.map(timeSlot => (

                    <a
                      key={timeSlot}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dropdown-target hover:bg-gray-100"
                      onClick={e => { setSelectedTimeSlot(e.target.innerText); setShowTimeOptions(false) }}>{timeSlot}</a>

                  ))}
                </div>
              </div>

              :

              null
            }
          </div>
          <div className="relative inline-block ml-2 text-left dropdown-target">
            <div>
              <button onClick={dayOptionsClick} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dropdown-target hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {selectedDay ? selectedDay : "Day"}
                <svg className="w-5 h-5 ml-2 -mr-1 dropdown-target" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {showDayOptions ?
              <div className="absolute left-0 z-20 mt-2 origin-top-right bg-white rounded-md shadow-lg dropdown-target ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 dropdown-target" role="none">
                  {weekdays.map(weekday => (

                    <a
                      key={weekday}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dropdown-target hover:bg-gray-100"
                      onClick={e => { setSelectedDay(e.target.innerText); setShowDayOptions(false) }}
                    >{weekday}</a>

                  ))}
                </div>
              </div>
              :

              null
            }
          </div>


          <div className="inline-block ml-2 text-left dropdown-target">
            <label className="block text-sm font-medium text-gray-700 dropdown-target">Event</label>
            <input
              onChange={handleSave}
              value={
                eventData &&
                eventData[week] &&
                eventData[week][selectedDay] &&
                eventData[week][selectedDay][selectedTimeSlot]
              }
              type="text"
              className="block w-full pr-12 border-gray-300 rounded-md dropdown-target focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="Add your event here">
            </input>

          </div>
          {showError ?

            <p className="absolute px-6 py-4 mt-2 bg-red-100 rounded-md dropdown-target">
              Please select a time and day before entering an event.
            </p>

            :

            null

          }


        </div>


        :
        null
      }

    </>

  )
}