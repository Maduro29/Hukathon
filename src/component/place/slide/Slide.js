import "./Slide.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Slide = (props) => {
    const { images } = props
    const [index, setIndex] = useState(0)

    const toLeftSlide = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const toRightSlide = () => {
        setIndex((index + 1) % images.length)
    }

    return (
        <div className="slide">
            <div className="slide-box">
                <img
                    className="slide-image"
                    src={images[index].imageLink}
                    alt={images[index].imageLink}
                ></img>
                <span className="slide-description">
                    {images[index].description}
                </span>
            </div>
            <div className="slide-button">
                <button className="slide-left" onClick={() => toLeftSlide()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    &nbsp;Prev
                </button>
                <button className="slide-right" onClick={() => toRightSlide()}>
                    Next&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Slide
