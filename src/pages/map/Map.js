import "./Map.scss"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Map = (props) => {
    const { place } = props

    console.log(place)

    const zoom = 15

    return (
        <>
            {place && (
                <div className="map">
                    <span className="map-title">Maps</span>
                    <div className="map-box">
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: process.env.REACT_APP_MAP_API_KEY,
                            }}
                            defaultCenter={place.center}
                            defaultZoom={zoom}
                            yesIWantToUseGoogleMapApiInternals
                        >
                            <AnyReactComponent
                                lat={place.center.lat}
                                lng={place.center.lng}
                                text={place.name}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            )}
        </>
    )
}

export default Map
