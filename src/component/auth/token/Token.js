import { selectToken } from "../../../app/userSlice"
import { useSelector } from "react-redux"

const Token = ({ children }) => {
    const isTokenExisted = useSelector(selectToken)

    return isTokenExisted !== "" ? children : <></>
}

export default Token
