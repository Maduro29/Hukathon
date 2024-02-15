import "./Navbar.scss"

const Navbar = (props) => {
    const { setChatTitle } = props

    const chatList = {
        placeChat: [
            {
                title: "Thong Nhat Park",
            },
        ],
        eventChat: [
            {
                title: "Nhung Thanh Pho Mo Mang",
            },
            {
                title: "World Cup",
            },
        ],
    }

    return (
        <div className="navbar">
            {chatList.placeChat.map((chat) => (
                <div
                    className="navbar-chat navbar-place"
                    onClick={() => {
                        setChatTitle(chat.title)
                    }}
                >
                    <span className="navbar-title">{chat.title}</span>
                    <span className="navbar-sub">Chat box for Place</span>
                </div>
            ))}
            {chatList.eventChat.map((chat) => (
                <div
                    className="navbar-chat navbar-event"
                    onClick={() => {
                        setChatTitle(chat.title)
                    }}
                >
                    <span className="navbar-title">{chat.title}</span>
                    <span className="navbar-sub">Chat box for Event</span>
                </div>
            ))}
        </div>
    )
}

export default Navbar
