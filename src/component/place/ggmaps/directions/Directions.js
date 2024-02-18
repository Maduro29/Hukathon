import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps"
import { useState, useEffect } from "react"
import "./Directions.scss"

const Directions = (props) => {
    const map = useMap()
    const routesLibrary = useMapsLibrary("routes")
    const [directionsService, setDirectionsService] = useState()
    const [directionsRenderer, setDirectionsRenderer] = useState()
    const [routes, setRoutes] = useState([])
    const [routeIndex, setRouteIndex] = useState(0)
    const selected = routes[routeIndex]
    const leg = selected?.legs[0]
    const [fare, setFare] = useState("")
    const { startPoint, destination } = props

    useEffect(() => {
        if (!routesLibrary || !map) return
        setDirectionsService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
    }, [routesLibrary, map])

    useEffect(() => {
        if (!directionsService || !directionsRenderer) return

        directionsService
            .route({
                origin: startPoint,
                destination: destination,
                travelMode: "TRANSIT",
                provideRouteAlternatives: true,
            })
            .then((response) => {
                directionsRenderer.setDirections(response)
                setRoutes(response.routes)
            })
    }, [directionsService, directionsRenderer, startPoint])

    useEffect(() => {
        if (!directionsRenderer) return
        directionsRenderer.setRouteIndex(routeIndex)
    }, [routeIndex, directionsRenderer])

    if (!leg) return null

    return (
        <div className="directions">
            <h4 style={{ margin: "4px 0" }}>Direction:</h4>
            <span>
                <b>{leg.start_address.split(",")[0]}</b> to{" "}
                <b>{leg.end_address.split(",")[0]}</b>
            </span>
            <span className="directions-distance">
                <b>Distance</b>: {leg.distance?.text}
            </span>
            <span>
                <b>Duration</b>: {leg.duration?.text}
            </span>
            <span>
                <b>Fare</b>: {fare}
            </span>

            <span>
                <b>Other Routes:</b>
            </span>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <button
                            onClick={() => {
                                console.log(route, index)
                                setRouteIndex(index)
                                route.fare
                                    ? setFare(route.fare.text)
                                    : setFare("")
                            }}
                        >
                            {route.summary || "Direction " + (index + 1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Directions
