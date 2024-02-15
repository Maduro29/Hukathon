import { useState } from "react"
import Chatbox from "../../component/chat/chatbox/Chatbox"
import Navbar from "../../component/chat/navbar/Navbar"
import "./Chat.scss"

const Chat = () => {
    const [chatTitle, setChatTitle] = useState("11")

    return (
        <div className="chat">
            <Navbar setChatTitle={setChatTitle} />
            <Chatbox chatTitle={chatTitle} />
        </div>
    )
}

export default Chat
