import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { selectToken, selectUser } from "../../app/userSlice"
import { getPendingRequests } from "../../services/user/getPendingRequests"
import "./Pending.scss"
import { useEffect, useState } from "react"
import { acceptRequest } from "../../services/user/acceptRequest"

const Pending = () => {
    const [requests, setRequests] = useState()
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)
    const userId = user.userId

    const getRequests = async () => {
        try {
            const data = await getPendingRequests(userId, token)
            const reqs = []
            if (data) {
                data.map((req) => {
                    if (req.user1.userId === userId) {
                        reqs.push({
                            ...req.user2,
                            userFriendId: req.userFriendId,
                        })
                    } else {
                        reqs.push({
                            ...req.user1,
                            userFriendId: req.userFriendId,
                        })
                    }
                })
                setRequests(reqs)
                console.log(reqs)
            } else {
                toast.error("Error")
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getRequests()
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [])

    const acceptReq = async (userFriendId) => {
        try {
            const data = await acceptRequest(userId, userFriendId, token)
            if (data) {
                await getRequests()
            } else {
                toast.error("Error")
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="pending">
            <span className="pending-title">Pending Requests</span>
            <div className="pending-box">
                {requests &&
                    requests.map((req) => {
                        console.log(req)
                        return (
                            <div className="pending-req" key={req.userId}>
                                <span className="pending-name">{req.name}</span>
                                <span className="pending-email">
                                    {req.email}
                                </span>
                                <button
                                    className="pending-button"
                                    onClick={() => acceptReq(req.userFriendId)}
                                >
                                    Accept
                                </button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Pending
