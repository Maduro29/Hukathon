import axios from "axios"

export const updateNotification = async (id, notificationId, token) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/${id}/notifications`,
            {
                notificationId,
            },
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
