import { APIProvider, Map } from "@vis.gl/react-google-maps"
import Directions from "./directions/Directions"
import "./GGMaps.scss"
import { useState } from "react"

const GGMaps = (props) => {
    const { destination } = props
    const [startPoint, setStartPoint] = useState("Đại học Sư Phạm Hà Nội")

    const onMapClick = (e) => {
        console.log(e)
        setStartPoint({
            lat: e.detail.latLng.lat,
            lng: e.detail.latLng.lng,
        })
    }

    return (
        <div style={{ width: "100%", height: "90vh" }} className="ggmaps">
            <span className="ggmaps-title">Maps</span>
            <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
                <Map
                    mapId={process.env.NEXT_PUBLIC_MAP_ID}
                    fullscreenControl={false}
                    onClick={(e) => onMapClick(e)}
                >
                    <Directions
                        startPoint={startPoint}
                        destination={destination}
                    />
                </Map>
            </APIProvider>
        </div>
    )
}

export default GGMaps
