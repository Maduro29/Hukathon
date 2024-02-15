import "./Form.scss"

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>
                    <span>Name:</span>
                    <input
                        type={"text"}
                        className="form-name"
                        name="name"
                        placeholder="Enter your name"
                    ></input>
                </label>
                <label>
                    <span>Phone Number:</span>
                    <input
                        type={"text"}
                        className="form-number"
                        name="number"
                        placeholder="Enter your phone number"
                    ></input>
                </label>
                <label>
                    <span>Personal ID:</span>
                    <input
                        type={"text"}
                        className="form-id"
                        name="id"
                        placeholder="Enter your personal id"
                    ></input>
                </label>
                <input type={"submit"} className="form-submit"></input>
            </form>
        </div>
    )
}

export default Form
