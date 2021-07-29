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
    console.log(events)
  }, [events])

  useEffect(() => {
    API.request('events', {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => setEvents(res.data))
    .catch(res => console.log(res))
  }, [])

  useEffect(() => {
    const handleWindowWidthChange = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowWidthChange)

    return () => {
      window.removeEventListener('resize', handleWindowWidthChange)
    }
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
            {
              events.length == 0 ?
              <div className="event-tile no-events">{`No events to display for ${Dayjs(currentMonth).format('MMMM')}`}</div>
              :
              events.map(event => {
              if (Dayjs(event.datetime).format('MM-YYYY') == Dayjs(currentMonth).format('MM-YYYY')) {
                return <Event {...{event}} />
              }
            })}
          </div>
        </div>
      </div>
      <NewEvent events={events} setEvents={setEvents}/>
    </>

  )
}

export default CalendarPage
