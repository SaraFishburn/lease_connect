import { useState, useEffect, useRef} from 'react'
import Dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

import API from '../../helpers/api'
import './styles.scss'


const NewEvent = (props) => {
  
  const eventTypes = ["inspection", "maintenance", "lease", "other"]
  const [openForm, setOpenForm] = useState(false)
  const eventFormRef = useRef()

  const defaultFormValues = {
    event_type: "Select Event Type",
    house_id: "Select Property",
  }

  const [formValues, setFormValues] = useState(defaultFormValues)
  const [houses, setHouses] = useState([])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    API.request('houses')
      .then (res => res.data)
      .then (data => setHouses(data))
  }, [])


  const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
  }

  useEffect((e) => {
    const mouseDownHandler = (e) => {
      if(eventFormRef && !eventFormRef.current.contains(e.target)){
        setOpenForm(false)
      }
    }
    document.addEventListener("mousedown", mouseDownHandler)
    
    return () => {
      document.removeEventListener("mousedown", mouseDownHandler)
    }
  }, [])
  
  const setDatetime = () => {
    if(formValues.date === "" || formValues.time === "") return

    Dayjs.extend(customParseFormat)
    return Dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toISOString()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const datetime = setDatetime()

    await API.request("events", {
        method: "POST",
        data: {...formValues, datetime: datetime},
        headers: {
            "Content-Type": "application/json",
        }
    });
    setFormValues(defaultFormValues)
    setDate('')
    setTime('')
    setOpenForm(false)
    props.setEvents([...props.events, {...formValues, datetime, house:houses[formValues.house_id]}])
}
  

  return (
    <div ref={eventFormRef} className={`new-event ${openForm ? "open-new-event-div" : ''}`}>
      <div className="new-event-button" onClick={() => setOpenForm(true)}>NEW EVENT</div>
      <div className={`formDiv ${openForm ? "open-form-div" : ''}`}>
        <form onSubmit={handleSubmit}>

          <select name='house_id' value={formValues.house_id} onChange={handleChange}>
            <option value='Select Property' disabled>Select Property</option>
            {houses.map(house =>
                <option key={house.id} value={house.id}>{house.title}</option>
            )}
          </select>

          <select name='event_type' value={formValues.event_type} onChange={handleChange}>
            <option value='Select Event Type' disabled >Select Event Type</option>
            {eventTypes.map(type =>
              <option key={type} value={type}>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</option>
            )}
          </select>

          <div className="datetime-fields">
            <input 
              type="date"
              name="date"
              value={date}
              onChange={(e) => {
                console.log(e.currentTarget.value)
                setDate(e.currentTarget.value)
              }}/>
            <input 
              type="time"
              name="time"
              value={time}
              onChange={(e) => {
                setTime(e.currentTarget.value)
              }}/>
          </div>
          <input type="submit" className="create-event-button" value="CREATE EVENT"/>
        </form>
      </div>
    </div>
  )
}

export default NewEvent


// value={formValues.house_id} onChange={handleChange}