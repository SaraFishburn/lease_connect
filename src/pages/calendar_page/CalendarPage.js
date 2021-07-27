import React, { useState, useEffect } from 'react'
import API from '../../helpers/api'
import Calendar from '../../components/calendar/Calendar'
import Event from '../../components/event/Event'
import Dayjs from 'dayjs'
import './styles.scss'
import NewEvent from '../../components/event/NewEvent'

const CalendarPage = () => {

  const [events, setEvents] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    API.request('events')
    .then(res => setEvents(res.data))
  }, [])

  useEffect(() => {
    console.log(events)
  }, [events])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  function formattedEvents(events) {
    return events.reduce((acc, event) => {
      const date = Dayjs(event.datetime).format('YYYY-MM-DD')
      acc[date] = event.event_type
      return acc
    }, {})
  }
  
  return (
    <>
      <div class="calendar-page" style={{transform:  `scale(calc(1 + ${
        windowWidth > 350 ?
        (windowWidth / 10000) * 1.3
        :
        0
        }))`}}>

        <div className="calendar-tile-wrapper">
          <Calendar {...{events: formattedEvents(events), setCurrentMonth, currentMonth }}/>
          <div className="event-tile-wrapper">
            {events.map(event => {
              if (Dayjs(event.datetime).format('MM-YYYY') == Dayjs(currentMonth).format('MM-YYYY')) {
                return <Event {...{event}} />
              }
            })}
            <div className="event-tile ghost-tile"></div>
          </div>
        </div>
      </div>
      <NewEvent />
    </>

  )
}

export default CalendarPage
