import React, { useState, useEffect } from 'react'
import API from '../../helpers/api'
import Calendar from '../../components/calendar/Calendar'
import Event from '../../components/event/Event'
import Dayjs from 'dayjs'
import './styles.scss'

const CalendarPage = () => {

  const [events, setEvents] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    API.request('events')
    .then(res => {
      console.log(res.data)
      setEvents(res.data)})
  }, [])

  function formattedEvents(events) {
    return events.reduce((acc, event) => {
      const date = Dayjs(event.datetime).format('YYYY-MM-DD')
      acc[date] = event.event_type
      return acc
    }, {})
  }
  
  return (
    <div class="calendar-page">
      <Calendar {...{events: formattedEvents(events), setCurrentMonth, currentMonth}}/>
      {events.map(event => {
        if (Dayjs(event.datetime).format('MM-YYYY') == Dayjs(currentMonth).format('MM-YYYY')) {
          return <Event {...{event}} />
        }
      })}
    </div>
  )
}

export default CalendarPage
