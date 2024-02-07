import Description from "./description/Description"
import Events from "./events/Events"
import Map from "./map/Map"
import "./Place.scss"
import Slide from "./slide/Slide"

const Place = () => {
    const images = [
        {
            url: "https://a.cdn-hotels.com/gdcs/production77/d1902/21336448-81d8-4643-a1b9-1545d08172de.jpg",
            description: "a",
        },
        {
            url: "https://royalhalonghotel.com/wp-content/uploads/2021/11/shutterstock-1443887954.jpg",
            description: "b",
        },
    ]

    const des_data = {
        name: "Lorem ipsum dolor sit amet",
        address:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie facilisis pharetra",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie facilisis pharetra. Donec malesuada bibendum leo sed euismod. Duis pretium velit eu nunc vehicula semper. Donec efficitur ipsum purus, ac malesuada eros blandit eget. Donec arcu risus, tincidunt ac magna ut, rhoncus vehicula felis. In vel massa ac massa commodo finibus a ac dui. Ut orci orci, venenatis ullamcorper est eget, mattis placerat sapien. Morbi blandit commodo turpis sed placerat. Quisque vehicula volutpat ullamcorper. Nam aliquet, nunc in ornare viverra, ante diam varius lectus, suscipit condimentum enim nunc non elit. Vivamus ante magna, ornare sit amet ex id, pharetra facilisis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt pellentesque mauris, at egestas lacus eleifend eu. Suspendisse euismod a orci vel sollicitudin. Vivamus euismod at dolor vel tincidunt.",
    }

    const events = [
        {
            name: "event 1",
            time: "1/1/2021",
        },
        {
            name: "event 2",
            time: "2/2/2022",
        },
    ]

    return (
        <div className="place">
            <div className="place-first-section">
                <div className="place-media">
                    <Slide images={images} />
                </div>
                <div className="place-description">
                    <div className="place-des-inside">
                        <Description des_data={des_data} />
                    </div>
                </div>
            </div>
            <div className="place-second-section">
                <div className="place-events">
                    <Events events={events} />
                </div>
                <div className="place-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Place
