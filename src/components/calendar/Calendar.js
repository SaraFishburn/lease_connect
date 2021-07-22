import React, { useState, useEffect } from 'react'
import SimpleReactCalendar from 'simple-react-calendar'
import Day from 'simple-react-calendar/lib/RenderPropsComponents/Day'
import DayOfWeek from 'simple-react-calendar/lib/RenderPropsComponents/DayOfWeek'
import './styles.scss'


export default function Calendar(props) {

  return (
    <SimpleReactCalendar
      // render day over default day, adding custom style classes
      renderDay={(dayProps) => <Day {...dayProps} blockClassName={props.events[dayProps.ISODate] ? `${props.events[dayProps.ISODate]} default` : 'default'} />}
      // make days of week headings only 2 letters
      renderDayOfWeek={(dayOfWeekProps) => <DayOfWeek {...dayOfWeekProps} day={dayOfWeekProps.day.slice(0, 2)}/>}
      // add symbols for previous and next month buttons
      headerPrevArrow='<'
      headerNextArrow='>'
      onMonthChange={newMonth => props.setCurrentMonth(newMonth)}
      activeMonth={props.currentMonth}
    />
  )
}