import './styles.scss'

const NewEvent = () => {
  const eventTypes = ["inspection", "maintenance", "lease", "other"]

  return (
    <div className="new-event">
      <div className="new-event-button">NEW EVENT</div>
      <div className="formDiv">
        <form action="">
          <select name='house_id'>
            <option value='' disabled selected>Select Event Type</option>
            {eventTypes.map(type => {
              <option value={`${type}`}>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</option>
            })}
          </select>
          <input type="date" />
          <input type="time" />
        </form>
      </div>
    </div>
  )
}

export default NewEvent


// value={formValues.house_id} onChange={handleChange}