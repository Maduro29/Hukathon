import React, { useEffect, useRef } from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectToken, selectUser } from "../../../app/userSlice"
import { updateNotification } from "../../../services/user/updateNotification"
import "./Notification.scss"

const Notification = (props) => {
    const { notis, showNoti, setShowNoti, updateNotis } = props
    const ref = useRef(null)
    const user = useSelector(selectUser)
    const userId = user.userId
    const token = useSelector(selectToken)
    const navigate = useNavigate()

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowNoti(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, setShowNoti])

    const updateRead = async (id) => {
        try {
            const data = await updateNotification(userId, id, token)
            if (data) {
                toast.success("Action completed!")
                updateNotis()
            } else {
                toast.error("Action failed!")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {showNoti && notis && (
                <div className="noti" ref={ref}>
                    <span
                        className="noti-head-title"
                        style={{ fontWeight: 600 }}
                    >
                        Notification
                    </span>
                    {notis.map((noti) => (
                        <div
                            className={
                                "noti-noti" + (!noti.read ? " not-view" : "")
                            }
                            key={noti.notificationId}
                        >
                            <div
                                className="noti-box"
                                onClick={() => {
                                    navigate(`event?id=${noti.event.id}`)
                                }}
                            >
                                <span className="noti-title">{noti.title}</span>
                                <span className="noti-description">
                                    {noti.content}
                                </span>
                            </div>
                            <div className="noti-update">
                                <span
                                    onClick={() =>
                                        updateRead(noti.notificationId)
                                    }
                                >
                                    Mark as {noti.read ? "unread" : "read"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Notification
