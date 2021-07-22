import Dayjs from "dayjs";
import "./styles.scss";

const Event = (props) => {
  return (
    <div class="event-tile">
      <div class={`${props.event_type} event-date`}>
        {/* use dayjs library to display the desired parts of the datetime */}
        <div>{Dayjs(props.datetime).format("DD")}</div>
        <div>{Dayjs(props.datetime).format("MMM").toUpperCase()}</div>
      </div>
      <div class="event-info">
        {/* use string interpolation to capitalize the event type */}
        <div>
          {`${props.event_type}`.charAt(0).toUpperCase() +
            `${props.event_type}`.slice(1)}
        </div>
        <div>{Dayjs(props.datetime).format("h:mma")}</div>
      </div>
    </div>
  );
};

export default Event;
