import axios from "axios"

export const login = async (email, password) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/authenticate`,
            {
                email,
                password,
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
