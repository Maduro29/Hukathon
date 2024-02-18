import axios from "axios"

export const getNotifications = async (id, token) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/users/${id}/notifications`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}
