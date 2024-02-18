import { useState } from "react"
import "./SearchUser.scss"
import { getUser } from "../../../services/user/getUser"
import { useSelector } from "react-redux"
import { selectToken } from "../../../app/userSlice"

const SearchUser = (props) => {
    const [email, setEmail] = useState()
    const token = useSelector(selectToken)
    console.log(token)

    const search = async (e) => {
        e.preventDefault()

        try {
            const data = await getUser(email, token)
            if (data) {
                props.onData(data)
                console.log(data)
            } else {
                console.log("error")
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="search-user">
            <form onSubmit={(e) => search(e)}>
                <input
                    type="email"
                    className="search-user-email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default SearchUser
