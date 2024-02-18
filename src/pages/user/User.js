import { useState } from "react"
import ResultUser from "../../component/user/result/ResultUser"
import SearchUser from "../../component/user/search/SearchUser"
import "./User.scss"

const User = () => {
    const [data, setData] = useState()

    const handleData = (res) => {
        setData(res)
    }

    return (
        <div className="user">
            <SearchUser onData={handleData} />
            <ResultUser data={data} />
        </div>
    )
}

export default User
