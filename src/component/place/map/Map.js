import "./Map.scss"
import GoogleMapReact from "google-map-react"

const Map = () => {
    const defaultProps = {
        center: {
            lat: 20.8933454,
            lng: 106.6757247,
        },
        zoom: 15,
    }

    return (
        <div className="map">
            <span className="map-title">Maps</span>
            <div className="map-box">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_MAP_API_KEY,
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
