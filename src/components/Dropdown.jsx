import { useEffect, useState } from "react"
import produce from "immer"
import { format } from "date-fns"
import { merge as _merge } from "lodash"

export default function Dropdown({ showDropdown, setShowDropdown, showDayOptions, setShowDayOptions, showTimeOptions, setShowTimeOptions, weekdays, timeSlots, eventData, setEventData, date, setDate }) {

  const year = [format(date, "yyyy")]
  const week = format(date, "w")
  
  const [errorMessage, setErrorMessage] = useState("")
  const [showError, setShowError] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [newEventValue, setNewEventValue] = useState("")
  
  const dayOptionsClick = () => setShowDayOptions(prev => !prev)
  const timeOptionsClick = () => setShowTimeOptions(prev => !prev)
  
  const hasEvents = (() => eventData?.[year]?.[week]?.[selectedDay]?.[selectedTimeSlot])()
  
  useEffect(() => {
    if (!showDropdown) {
      setShowError(false)
    }
  },[showDropdown])

  const handleSubmit = () => {
    if (!selectedTimeSlot) {
      setErrorMessage("Please select a time for the event.")
      setShowError(true)
    } else if (!selectedDay) {
      setErrorMessage("Please select a day for the event.")
      setShowError(true)
    } else if (!newEventValue) {
      setErrorMessage("Please enter the event you wish to submit.")
      setShowError(true)
    } else if (hasEvents) {
      const newEvent = {
        [year]: {
          [week]: {
            [selectedDay]: {
              [selectedTimeSlot]: [...eventData[year][week][selectedDay][selectedTimeSlot], newEventValue.trim()]
            }
          }
        }
      }
      const newState = produce(eventData, draft => {
        _merge(draft, newEvent)
      })
      setEventData(newState)
      setNewEventValue("")
      setShowError(false)
    } else {
      const newEvent = {
      [year]: {
        [week]: {
          [selectedDay]: {
            [selectedTimeSlot]: [newEventValue.trim()]
          }
        }
      }
      }
      const newState = produce(eventData, draft => {
        _merge(draft, newEvent)
      })
      setEventData(newState)
      setNewEventValue("")
      setShowError(false)
    }
  }

  return (
    <>
      {showDropdown ?
        <div className="flex flex-col justify-center items-center p-8 space-y-6 dropdown-target bg-gray-100 rounded-md">
          <div className="dropdown-target flex flex-col space-y-6 w-96">
            <div className="dropdown-target flex justify-between items-center">
            <div className="relative inline-block text-left dropdown-target">
              <button onClick={timeOptionsClick} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dropdown-target hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {selectedTimeSlot ? selectedTimeSlot : "Time"}
                <svg className="dropdown-target w-5 h-5 ml-2 -mr-1 dropdown-target" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path className="dropdown-target" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>             
              {showTimeOptions ?
                <div className="absolute left-0 z-20 mt-2 origin-top-right bg-white rounded-md shadow-lg dropdown-target ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 dropdown-target" role="none">
                    {timeSlots.map(timeSlot => (
                      <a
                        key={timeSlot}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dropdown-target hover:bg-gray-100"
                        onClick={e => {
                          setSelectedTimeSlot(e.target.innerText)
                          setShowTimeOptions(false)
                          setShowError(false)
                        }}
                      >{timeSlot}</a>
                    ))}
                  </div>
                </div>
                :
                null
              }
            </div>
            <div className="relative inline-block text-left dropdown-target">
              <div>
                <button onClick={dayOptionsClick} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dropdown-target hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {selectedDay ? selectedDay : "Day"}
                  <svg className="dropdown-target w-5 h-5 ml-2 -mr-1 dropdown-target" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path className="dropdown-target" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
                        onClick={e => {
                          setSelectedDay(e.target.innerText)
                          setShowDayOptions(false)
                          setShowError(false)
                        }}
                      >{weekday}</a>
                    ))}
                  </div>
                </div>
                :
                null
              }
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="uppercase inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm dropdown-target hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Save Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 dropdown-target"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path className="dropdown-target" fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </button>
            </div>
            <div className="dropdown-target">
              <textarea
                onChange={e => setNewEventValue(e.target.value)}
                value={newEventValue}
                className="w-full border-gray-300 rounded-md dropdown-target focus:ring-indigo-500 focus:border-indigo-500 p-4 sm:text-sm" placeholder="Add your event here...">
              </textarea>
            </div>
            {showError ?
            <div className="dropdown-target px-6 py-4 bg-red-100 rounded-md">
              <p className="dropdown-target">{errorMessage}</p>
            </div>
            :
            null
            }
          </div>
        </div>
        :
        null
      }
    </>

  )
}