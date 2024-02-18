import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { selectToken, selectUser } from "../../../app/userSlice"
import { requestFriend } from "../../../services/user/requestFriend"
import "./ResultUser.scss"

const ResultUser = (props) => {
    const { data } = props
    const user = useSelector(selectUser)
    const userId = user.userId
    const token = useSelector(selectToken)
    console.log(data.id, userId)

    const addFriend = async (user_id1, user_id2) => {
        try {
            const data = await requestFriend(user_id1, user_id2, token)
            if (data) {
                console.log(data)
                toast.success("Request successfully!")
            } else {
                toast.error("Request failed!")
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="result-user">
            {data ? (
                <>
                    <span>{data.name}</span>
                    <span>{data.address}</span>
                    <button
                        className="result-user-friend"
                        onClick={() => addFriend(userId, data.id)}
                    >
                        Add friend
                    </button>
                </>
            ) : (
                "Let search!"
            )}
        </div>
    )
}

export default ResultUser
