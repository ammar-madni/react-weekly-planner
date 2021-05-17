import { eachHourOfInterval, format } from "date-fns";
import { merge as _merge } from "lodash"

import Events from "./Events"

export default function TableDataItem({ eventData, setEventData, date, setDate, day }) {

  const hoursInTheDayAsDate = (eachHourOfInterval({
    start: (new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0)),
    end: (new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23))
  }))

  const hoursOfTheDay = hoursInTheDayAsDate.map(hour => format(hour, "Haaa"))

  hoursOfTheDay.unshift("all-day");

  return (
    <>
      <div
        className={(day.getDate() == (new Date).getDate()) ? "w-full text-center text-gray-500 uppercase text-lg py-4 px-6 bg-indigo-100 xl:bg-gray-100 rounded-md xl:rounded-none border-gray-300 border-b-[1px] h-[fit-content]" : "w-full text-center text-gray-500 uppercase text-lg py-4 px-6 bg-gray-100 rounded-md xl:rounded-none border-gray-300 border-b-[1px] h-[fit-content]"}
      >
        {format(day, "EEE d")}
      </div>
      {hoursOfTheDay.map(hour => (
        <div
          key={`${hour} timeSlot`}
          className="w-full flex flex-col space-y-2 text-gray-500"
        >
          <Events
            key={`${day} tabledataitem`}
            eventData={eventData}
            setEventData={setEventData}
            date={date}
            setDate={setDate}
            day={day}
            hour={hour}
          />
        </div>
      ))}
    </>
  )
}

{/* <div className="p-4 space-y-4 bg-gray-100 rounded-md editing-mode">
<textarea
  ref={textareaRef}
  rows="4"
  className={editable ? "block w-full sm:text-sm border-gray-300 rounded-md dropdown-target focus:ring-indigo-500 focus:border-indigo-500 editing-mode" : "block w-full rounded-md ring-0 sm:text-sm focus:ring-transparent border-gray-300 focus:border-gray-300 cursor-default dropdown-target editing-mode"}
  readOnly={editable ? "" : "readOnly"} defaultValue={event}
></textarea>
<div className="flex justify-between align-center space-x-2 editing-mode">
  <button
    onClick={() => {
      if (editable) {
        setEditable(prev => !prev)
        const newState = produce(eventData, draft => {
          draft[year][week][day][time][index] = textareaRef.current.value
        })
        setEventData(newState)
      } else {
        setEditable(prev => !prev)
        textareaRef.current.focus()
      }
    }}
    type="button"
    className={!editable ? "uppercase flex self-end items-center justify-between px-4 py-2 text-xs font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-24 editing-mode" : "uppercase flex self-end items-center justify-between px-4 py-2 text-xs font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-24 editing-mode"}
  >
    {editable ? "Save" : "Edit"}
    {editable ?
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 editing-mode"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path className="editing-mode" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    : 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 editing-mode" viewBox="0 0 20 20"
      fill="currentColor">
      <path className="editing-mode" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path className="editing-mode" fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
    }
  </button>
  <button
    onClick={() => {
      const newState = produce(eventData, draft => { (draft[year][week][day][time]).splice(index, 1) })
      setEventData(newState)
    }}
    type="button"
    className="uppercase flex self-end items-center justify-between px-4 py-2 text-xs font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-24 editing-mode"
  >
    Delete
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 editing-mode"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path className="editing-mode" fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  </button>
</div>
</div> */}
