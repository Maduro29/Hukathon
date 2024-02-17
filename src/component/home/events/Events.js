import "./Events.scss"
import { useNavigate } from "react-router-dom"

const Events = (props) => {
    const { events } = props
    const navigate = useNavigate()

    const viewPlace = (id) => {
        navigate(`/event/${id}`)
    }

    return (
        <div className="events-all">
            <span className="events-title">Events</span>
            <div className="events-box">
                {events &&
                    events.map((event) => (
                        <div
                            className="events-event"
                            key={event.id}
                            onClick={() => viewPlace(event.id)}
                        >
                            <div className="events-event-img">
                                <img
                                    src={event.eventImages[0].imageLink}
                                    alt={event.name}
                                ></img>
                            </div>
                            <span className="events-event-name">
                                {event.name}
                            </span>
                            <span className="events-event-description">
                                {event.description}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Events
