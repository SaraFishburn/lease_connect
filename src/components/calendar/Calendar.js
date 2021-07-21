import SimpleReactCalendar from 'simple-react-calendar'
import Day from 'simple-react-calendar/lib/RenderPropsComponents/Day'
import DayOfWeek from 'simple-react-calendar/lib/RenderPropsComponents/DayOfWeek'

import './styles.scss'

const events = {
  ["2021-07-01"]: 'maintenance',
  ["2021-07-27"]: 'inspection',
  ["2021-07-13"]: 'lease'
}

export default function Calendar() {

  return (
    <SimpleReactCalendar
      // render day over default day, adding custom style classes
      renderDay={(props) => <Day {...props} blockClassName={events[props.ISODate] ? `${events[props.ISODate]} default` : 'default'} />}
      // make days of week headings only 2 letters
      renderDayOfWeek={(props) => <DayOfWeek {...props} day={props.day.slice(0, 2)}/>}
      // add symbols for previous and next month buttons
      headerPrevArrow='<'
      headerNextArrow='>'
    />
  )
}