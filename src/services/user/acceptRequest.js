import axios from "axios"

export const acceptRequest = async (id, userFriendId, token) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/${id}/pendingRequest`,
            {
                userFriendId,
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
