import "./Event.scss"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getEvent } from "../../services/event/getEvent"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectToken, selectUser } from "../../app/userSlice"
import { shareEvent } from "../../services/event/shareEvent"

const Event = () => {
    const [eventData, setEventData] = useState()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get("id")
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [userId, setUserId] = useState()
    const token = useSelector(selectToken)

    useEffect(() => {
        user ? setUserId(user.userId) : setUserId(null)
    }, [user])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEvent(id)
                console.log(data)

                if (data) {
                    setEventData(data)
                } else {
                    toast.error("Event not found!")
                }
            } catch (err) {
                console.log(err)
                toast.error("Error happens! Please try again!")
            }
        }

        fetchData()
    }, [])

    const share = async () => {
        try {
            const data = await shareEvent(userId, id, token)
            if (data) {
                console.log("ok")
            } else {
                console.log("no oke")
            }
        } catch (err) {
            console.error(err)
        }
    }

    const [isJoin, setIsJoin] = useState(false)

    return (
        <div className="event">
            {eventData && (
                <>
                    <div className="event-status">
                        <span className="event-title">{eventData.name}</span>
                        <button
                            className="event-join"
                            onClick={() => setIsJoin(!isJoin)}
                        >
                            {isJoin ? "Joined" : "Join"}
                        </button>
                        <button className="event-share" onClick={() => share()}>
                            Share
                        </button>
                    </div>
                    <img
                        src={eventData.eventImages[0].imageLink}
                        alt="Event"
                    ></img>
                    <span className="event-description">
                        {eventData.description}
                    </span>
                    <span
                        className="event-regis"
                        onClick={() => {
                            if (eventData.registrationLink) {
                                navigate(eventData.registrationLink[0])
                            }
                        }}
                    >
                        Registration Link
                    </span>
                    <span className="event-place">
                        <span style={{ color: "#5b86e5" }}>Place: </span>
                        <span
                            className="event-place-name"
                            onClick={() => {
                                navigate(`/place?id=${eventData.place.id}`)
                            }}
                        >
                            {eventData.place.name}
                        </span>
                    </span>
                    <div className="event-comment-box">
                        {/* <span className="event-comment-title">Comments</span>
                        {eventData.comments.map((cmt) => (
                            <div className="event-comments">
                                <span className="event-user">{cmt.user}</span>
                                <span className="event-comment">
                                    {cmt.comment}
                                </span>
                            </div>
                        ))} */}
                    </div>
                </>
            )}
        </div>
    )
}

export default Event
