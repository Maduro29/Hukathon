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

    useEffect(() => {
        updateNotis()
    }, [])

    const goToSearch = (e) => {
        navigate("/search")
    }

    const toggleNoti = () => {
        setShowNoti(!showNoti)
    }

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
