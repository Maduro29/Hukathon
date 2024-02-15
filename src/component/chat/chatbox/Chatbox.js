import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import "./Chatbox.scss"

const Chatbox = (props) => {
    const userName = "Tran Manh Dung"
    const { chatTitle } = props
    const [messages, setMessages] = useState([
        {
            name: "Bui Duc Anh",
            content: "Hello cac chau",
        },
        {
            name: "Bui Thu Phuong",
            content: "Ba chao cac chau",
        },
        {
            name: "Tran Manh Dung",
            content: "Alo gi the?",
        },
        {
            name: "Leo Messi",
            content: "10h37",
        },
        {
            name: "Bui Duc Anh",
            content: "Hello cac chau",
        },
        {
            name: "Bui Thu Phuong",
            content: "Ba chao cac chau",
        },
        {
            name: "Tran Manh Dung",
            content: "Alo gi the?",
        },
        {
            name: "Leo Messi",
            content: "10h37",
        },
        {
            name: "Bui Duc Anh",
            content: "Hello cac chau",
        },
        {
            name: "Bui Thu Phuong",
            content: "Ba chao cac chau",
        },
        {
            name: "Tran Manh Dung",
            content: "Alo gi the?",
        },
        {
            name: "Leo Messi",
            content: "10h37",
        },
    ])
    const [text, setText] = useState("")

    const sendMessage = () => {
        setMessages([
            ...messages,
            {
                name: userName,
                content: text,
            },
        ])
        setText("")
    }

    useEffect(() => {
        var chatboxMessages = document.querySelector(".chatbox-messages")
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight
    }, [messages])

    return (
        <div className="chatbox">
            <span className="chatbox-title">{chatTitle}</span>
            <div className="chatbox-messages">
                {messages.map((message) => (
                    <div
                        className={
                            "chatbox-message-box " +
                            (message.name === userName ? "sent" : "")
                        }
                    >
                        <div className="chatbox-message">
                            <span className="chatbox-user">{message.name}</span>
                            <span className="chatbox-content">
                                {message.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chatbox-input-box">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        sendMessage()
                    }}
                >
                    <input
                        className="chatbox-input"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    ></input>
                </form>
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="chatbox-send"
                    onClick={() => sendMessage()}
                />
            </div>
        </div>
    )
}

export default Chatbox
