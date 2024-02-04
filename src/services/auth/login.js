import axios from "axios"

export const login = async (email, password) => {
    const response = await axios.post("", { email, password })
    return response.data
}
