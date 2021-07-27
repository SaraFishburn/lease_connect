import { useState, useEffect, useRef} from 'react'
import API from '../../helpers/api'
import './styles.scss'

const NewEvent = () => {
  const eventTypes = ["inspection", "maintenance", "lease", "other"]
  const [openForm, setOpenForm] = useState(false)
  const eventFormRef = useRef()

  const defaultFormValues = {
    datetime: "",
    event_type: "",
    house: "",
    date: '',
    time: ''
  }

  const [formValues, setFormValues] = useState(defaultFormValues)
  const [houses, setHouses] = useState([])

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

  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  useEffect((e) => {
    if(eventFormRef === ''){
      return
    }
    document.addEventListener("mousedown", (e) => {
      if(eventFormRef && !eventFormRef.current.contains(e.target)){
        setOpenForm(false)
      }
    })
  }, [])
  

  return (
    <div ref={eventFormRef} className={`new-event ${openForm ? "open-new-event-div" : ''}`}>
      <div className="new-event-button" onClick={() => setOpenForm(true)}>NEW EVENT</div>
      <div className={`formDiv ${openForm ? "open-form-div" : ''}`}>
        <form action="">

          <select name='house' value={formValues.house} onChange={handleChange}>
            <option value='' disabled selected>Select Property</option>
            {houses.map(house =>
                <option value={house.id}>{house.title}</option>
            )}
          </select>

          <select name='event_type' value={formValues.event_type} onChange={handleChange}>
            <option value='' disabled selected>Select Event Type</option>
            {eventTypes.map(type =>
              <option value={type}>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</option>
            )}
          </select>

          <div className="datetime-fields">
            <input type="date" name="date" onChange={handleChange}/>
            <input type="time" name="time" onChange={handleChange}/>
          </div>
          <input type="submit" className="create-event-button" value="CREATE EVENT"/>
        </form>
      </div>
    </div>
  )
}

export default NewEvent


// value={formValues.house_id} onChange={handleChange}