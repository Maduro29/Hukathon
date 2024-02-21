import Logo from "../logo/Logo"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeToLogin, changeToRegister } from "../../app/authSlice"
import { useSelector } from "react-redux"
import { removeToken, selectToken, selectUser } from "../../app/userSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons"
import Notification from "./noti/Notification"
import { useEffect, useState } from "react"
import Token from "../auth/token/Token"
import { getNotifications } from "../../services/user/getNotifications"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const [showNoti, setShowNoti] = useState(false)
    const [notis, setNotis] = useState()
    const user = useSelector(selectUser)
    const email = user && user.email

    const goToHome = () => {
        navigate("/")
    }

    const goToLogin = () => {
        dispatch(changeToLogin())
        navigate("/auth")
    }

    const goToRegister = () => {
        dispatch(changeToRegister())
        navigate("/auth")
    }

    const logout = () => {
        dispatch(removeToken())
        navigate("/")
    }

    const updateNotis = async () => {
        if (user) {
            try {
                const data = await getNotifications(user.userId, token)
                if (data) {
                    setNotis(data)
                } else {
                    console.log("Error")
                }
            } catch (err) {
                console.error(err)
            }
        }
    }

    useEffect(() => {
        updateNotis()
        const eventSource = new EventSource(
            "http://192.168.0.101:8080/stream-sse",
        )

        eventSource.addEventListener("custom-event", function (event) {
            console.log("Received a custom event: ", JSON.parse(event.data))
            if (JSON.parse(event.data).userId) {
                const idList = JSON.parse(event.data).userId
                if (user && idList.includes(user.userId)) {
                    updateNotis()
                }
            }
        })

        eventSource.onmessage = function (event) {
            console.log(event.data)
        }

        // eventSource.onerror = function (error) {
        //     console.error("Failed to connect to SSE", error)
        // }
    }, []) // Chạy một lần khi component được mount để lấy thông báo

    const goToSearch = (e) => {
        navigate("/search")
    }

    const toggleNoti = () => {
        setShowNoti(!showNoti)
    }

    // useEffect(() => {
    //     // Initialize Socket.IO connection
    //     socket.on()
    // }, [])

    return (
        <div className="header">
            <div className="header-nav">
                <button className="header-logo" onClick={(e) => goToHome(e)}>
                    <Logo />
                </button>
                {token !== "" && (
                    <>
                        <button
                            className="header-search"
                            onClick={() => goToSearch()}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </>
                )}
                <span className="header-email">{email}</span>
            </div>
            <div className="header-auth">
                {notis && token !== "" ? (
                    <>
                        <button className="header-noti">
                            <FontAwesomeIcon
                                icon={faBell}
                                onClick={() => toggleNoti()}
                            />
                            <span className="header-noti-number">
                                {notis.length}
                            </span>
                            <Token>
                                <Notification
                                    notis={notis}
                                    showNoti={showNoti}
                                    setShowNoti={setShowNoti}
                                    updateNotis={updateNotis}
                                />
                            </Token>
                        </button>
                        <button
                            className="header-logout"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="header-login"
                            onClick={() => goToLogin()}
                        >
                            Login
                        </button>
                        <button
                            className="header-register"
                            onClick={() => goToRegister()}
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
