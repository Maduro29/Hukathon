import "./Result.scss"

const Result = (props) => {
    const { result } = props
    const { events, places } = result

    return (
        <div className="result">
            <div className="result-places">
                <span className="result-title">Places</span>
                <div className="result-p-box">
                    {places.map((place) => (
                        <div className="result-place" key={place.name}>
                            <span className="result-p-name">{place.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="result-events">
                <span className="result-title">Events</span>
                <div className="result-e-box">
                    {events.map((event) => (
                        <div className="result-event" key={event.name}>
                            <span className="result-e-name">{event.name}</span>
                            <span className="result-e-time">{event.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Result
