import { useRef } from "react"
import { format } from "date-fns";
import produce from "immer"

export default function TableData({ day, time, eventData, setEventData, date, setDate }) {

  const week = [format(date, "w")]

  const dataEl = useRef(null)

  return (
    <td
      className="px-6 py-3"
      ref={dataEl}
    >
      <p>
        {eventData[week][day][time]}
      </p>

      {eventData[week][day][time] ?

        <button
          onClick={() => {
            if (eventData[week][day][time]) {

              const nextState = produce(eventData, draft => { draft[week][day][time] = "" })
              setEventData(nextState)

            }
          }}
          type="button"
          className="inline-flex items-center order-last px-2 py-1 mt-2 text-xs font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-first"
        >
          Delete Event
    </button>

        :

        null

      }
    </td>
  )
}

