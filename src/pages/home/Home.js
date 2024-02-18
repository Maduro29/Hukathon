import { useEffect, useState } from "react"
import Events from "../../component/home/events/Events"
import Places from "../../component/home/places/Places"
import { allPlaces } from "../../services/place/allPlaces"
import { allEvents } from "../../services/event/allEvents"
import { toast } from "react-hot-toast"
import "./Home.scss"

const Home = () => {
    const [places, setPlaces] = useState()
    const [events, setEvents] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await allPlaces()
                console.log(data)

                if (data) {
                    setPlaces(data)
                } else {
                    toast.error("No places found!")
                }
            } catch (err) {
                console.log(err)
                toast.error("Error happens! Please try again!")
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await allEvents()
                console.log(data)

                if (data) {
                    setEvents(data)
                } else {
                    toast.error("No events found!")
                }
            } catch (err) {
                console.log(err)
                toast.error("Error happens! Please try again!")
            }
        }

        fetchData()
    }, [])

    return (
        <div className="home">
            <span className="home-title">Home</span>
            <div className="home-content">
                <Places places={places} />
                <Events events={events} />
            </div>
        </div>
    )
}

export default Home
