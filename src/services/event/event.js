import axios from "axios"

export const event = async (id) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/authenticate`,
            {
                id,
            },
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
