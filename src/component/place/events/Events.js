import "./Events.scss"

const Events = (props) => {
    const { events } = props

    return (
        <div className="events">
            <span className="events-title">Events</span>
            <div className="events-box">
                {events.map((event) => (
                    <div className="events-event">
                        <span className="events-name">{event.name}</span>
                        <span className="events-time">{event.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events
