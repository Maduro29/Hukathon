import { useEffect, useState } from "react"
import Description from "../../component/place/description/Description"
import Events from "../../component/place/events/Events"
import "./Place.scss"
import Slide from "../../component/place/slide/Slide"
import GGMaps from "../../component/place/ggmaps/GGMaps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Place = () => {
    const [placeData, setPlaceData] = useState()

    useEffect(() => {
        setPlaceData({
            images: [
                {
                    url: "https://a.cdn-hotels.com/gdcs/production77/d1902/21336448-81d8-4643-a1b9-1545d08172de.jpg",
                    description: "a",
                },
                {
                    url: "https://royalhalonghotel.com/wp-content/uploads/2021/11/shutterstock-1443887954.jpg",
                    description: "b",
                },
            ],
            des_data: {
                name: "Lorem ipsum dolor sit amet",
                address:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie facilisis pharetra",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie facilisis pharetra. Donec malesuada bibendum leo sed euismod. Duis pretium velit eu nunc vehicula semper. Donec efficitur ipsum purus, ac malesuada eros blandit eget. Donec arcu risus, tincidunt ac magna ut, rhoncus vehicula felis. In vel massa ac massa commodo finibus a ac dui. Ut orci orci, venenatis ullamcorper est eget, mattis placerat sapien. Morbi blandit commodo turpis sed placerat. Quisque vehicula volutpat ullamcorper. Nam aliquet, nunc in ornare viverra, ante diam varius lectus, suscipit condimentum enim nunc non elit. Vivamus ante magna, ornare sit amet ex id, pharetra facilisis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt pellentesque mauris, at egestas lacus eleifend eu. Suspendisse euismod a orci vel sollicitudin. Vivamus euismod at dolor vel",
            },
            place: {
                center: {
                    lat: 20.8939428,
                    lng: 106.6761256,
                },
            },
            name: "Nhà",
            events: [
                {
                    name: "event 1",
                    time: "1/1/2021",
                },
                {
                    name: "event 2",
                    time: "2/2/2022",
                },
            ],
            follow: false,
        })
    }, [])

    const [ratings, setRatings] = useState(0)

    const [hoverRating, setHoverRating] = useState(0)

    const toggleFollow = () => {
        setPlaceData((prevState) => ({
            ...prevState,
            follow: !prevState.follow,
        }))
    }

    return (
        <>
            {placeData && (
                <div className="place">
                    <div className="place-first-section">
                        <div className="place-media">
                            <Slide images={placeData.images} />
                        </div>
                        <div className="place-description">
                            <div className="place-des-inside">
                                <Description
                                    des_data={placeData.des_data}
                                    follow={placeData.follow}
                                    toggleFollow={toggleFollow}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="place-second-section">
                        <div className="place-events">
                            <Events events={placeData.events} />
                        </div>
                        <div className="place-map">
                            <GGMaps />
                        </div>
                        <div className="place-ratings">
                            <span>Ratings</span>
                            <div className="place-stars">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={`place-star ${i < hoverRating ? "active" : ""} ${i <= ratings ? "rated" : ""}`}
                                        onMouseEnter={() =>
                                            setHoverRating(i + 1)
                                        }
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRatings(i)}
                                    />
                                ))}
                            </div>
                            <button>Send rating</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Place
