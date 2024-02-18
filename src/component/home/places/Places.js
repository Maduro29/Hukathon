import "./Places.scss"
import { useNavigate } from "react-router-dom"

const Places = (props) => {
    const { places } = props
    const navigate = useNavigate()

    return (
        <div className="places">
            <span className="places-title">Places</span>
            <div className="places-box">
                {places &&
                    places.map((place) => (
                        <div
                            className="places-place"
                            key={place.id}
                            onClick={() => {
                                navigate(`/place?id=${place.id}`)
                            }}
                        >
                            <div className="places-place-img">
                                <img
                                    src={place.images[0].imageLink}
                                    alt={place.name}
                                ></img>
                            </div>
                            <span className="places-place-name">
                                {place.name}
                            </span>
                            <span className="places-place-description">
                                {place.description}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Places
