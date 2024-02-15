import "./Event.scss"
import { useEffect, useState } from "react"

const Event = () => {
    const [eventData, setEventData] = useState()

    useEffect(() => {
        setEventData({
            name: "Event 1",
            imgUrl: "https://tayson.binhdinh.gov.vn/uploads/news/2022_06/unnamed4.jpg",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            regisLink: "https://facebook.com",
            place: {
                name: "Place 1",
                link: "https://facebook.com",
            },
            comments: [
                {
                    user: "User 1",
                    comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                },
                {
                    user: "User 2",
                    comment: "Comment 2",
                },
            ],
        })
    }, [])

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
                        <button className="event-share">Share</button>
                    </div>
                    <img src={eventData.imgUrl} alt="Event"></img>
                    <span className="event-description">
                        {eventData.description}
                    </span>
                    <span className="event-regis">Registration Link</span>
                    <span className="event-place">
                        <span style={{ color: "#5b86e5" }}>Place: </span>
                        <span className="event-place-name">
                            {eventData.place.name}
                        </span>
                    </span>
                    <div className="event-comment-box">
                        <span className="event-comment-title">Comments</span>
                        {eventData.comments.map((cmt) => (
                            <div className="event-comments">
                                <span className="event-user">{cmt.user}</span>
                                <span className="event-comment">
                                    {cmt.comment}
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Event
