import "./Description.scss"

const Description = (props) => {
    const { des_data, follow, toggleFollow } = props
    const { name, address, description } = des_data

    return (
        <div className="description">
            <span className="description-name">
                {name} <br></br>
                <span
                    className={"description-follow" + (follow ? " active" : "")}
                    onClick={() => toggleFollow()}
                >
                    {follow ? "Followed" : "Follow"}
                </span>
            </span>
            <span className="description-address">
                <span className="description-italic">Address: </span>
                {address}
            </span>{" "}
            <span className="description-des">{description}</span>
        </div>
    )
}

export default Description
