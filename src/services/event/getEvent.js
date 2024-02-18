import axios from "axios"

export const getEvent = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/events/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        )
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}
