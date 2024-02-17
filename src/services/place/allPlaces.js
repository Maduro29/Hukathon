import axios from "axios"

export const allPlaces = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/places`,
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
