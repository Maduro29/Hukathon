import axios from "axios"

export const searchAll = async (
    district,
    fromDateDto,
    tags,
    text,
    toDateDto,
) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/search`,
            {
                district,
                fromDateDto,
                tags,
                text,
                toDateDto,
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
