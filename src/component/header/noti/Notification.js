import React, { useEffect, useRef } from "react"
import "./Notification.scss"

const Notification = (props) => {
    const { notis, showNoti, setShowNoti } = props
    const { notiList } = notis
    const ref = useRef(null)

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

    return (
        <>
            {showNoti && (
                <div className="noti" ref={ref}>
                    <span
                        className="noti-head-title"
                        style={{ fontWeight: 600 }}
                    >
                        Notification
                    </span>
                    {notiList.map((noti) => (
                        <div
                            className={
                                "noti-noti" + (!noti.view ? " not-view" : "")
                            }
                        >
                            <span className="noti-title">{noti.title}</span>
                            <span className="noti-description">
                                {noti.description}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Notification
