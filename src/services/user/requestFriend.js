import axios from "axios"

export const requestFriend = async (user_id1, user_id2, token) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/requestFriend`,
            {
                user_id1,
                user_id2,
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
