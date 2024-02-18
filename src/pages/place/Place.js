import { useEffect, useState } from "react"
import Description from "../../component/place/description/Description"
import Events from "../../component/place/events/Events"
import "./Place.scss"
import Slide from "../../component/place/slide/Slide"
import GGMaps from "../../component/place/ggmaps/GGMaps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"
import { getPlace } from "../../services/place/getPlace"
import { toast } from "react-hot-toast"

const Place = () => {
    const [placeData, setPlaceData] = useState()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get("id")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPlace(id)
                console.log(data)

                if (data) {
                    setPlaceData(data)
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
                                    name={placeData.name}
                                    address={placeData.address}
                                    description={placeData.description}
                                    follow={placeData.follow}
                                    toggleFollow={toggleFollow}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="place-second-section">
                        <div className="place-events">
                            {/* <Events events={placeData.events} /> */}
                        </div>
                        <div className="place-map">
                            <GGMaps destination={placeData.name} />
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
