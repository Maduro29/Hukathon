import axios from "axios"

export const shareEvent = async (user_id, event_id, token) => {
    try {
        console.log(user_id, event_id)
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/sharenotifications`,
            {
                senderId: Number(user_id),
                eventId: Number(event_id),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            },
        )
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}
