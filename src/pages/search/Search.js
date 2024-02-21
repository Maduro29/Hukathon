import { useState } from "react"
import "./Search.scss"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Result from "../../component/search/result/Result"
import { toast } from "react-hot-toast"
import { searchAll } from "../../services/search/searchAll"

const Search = () => {
    const [text, setText] = useState("")
    const [tags, setTags] = useState([])
    const [curTag, setCurTag] = useState("")
    const districts = ["Cau Giay", "Thanh Xuan", "Nam Tu Liem"]
    const [district, setDistrict] = useState("")
    const [fromMonth, setFromMonth] = useState(0)
    const [fromYear, setFromYear] = useState(0)
    const [toMonth, setToMonth] = useState(0)
    const [toYear, setToYear] = useState(0)
    const [result, setResult] = useState({
        events: [
            {
                name: "event 1",
                time: "2/2/2022",
            },
            {
                name: "event 2",
                time: "3/3/2023",
            },
        ],
        places: [
            {
                name: "park 1",
            },
            {
                name: "park 2",
            },
        ],
    })

    const createTag = (e) => {
        e.preventDefault()
        if (curTag && !tags.includes(curTag)) {
            setTags([...tags].concat(curTag))
            setCurTag("")
        }
    }

    const deleteTag = (tag) => {
        let tmpTags = [...tags]
        tmpTags = tmpTags.filter((tmpTag) => tmpTag !== tag)
        setTags(tmpTags)
    }

    const deleteAll = (e) => {
        e.preventDefault()
        setTags([])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fromDate = {
                fromMonth: fromMonth,
                fromYear: fromYear,
            }
            const toDate = {
                toMonth: toMonth,
                toYear: toYear,
            }
            const response = await searchAll(
                district,
                fromDate,
                tags,
                text,
                toDate,
            )
            if (response) {
                setResult(response)
            } else {
                toast.error("Error in search")
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="search">
            <span className="search-title">Search</span>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="search-flex-1">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={"Enter to search..."}
                        name="text"
                        className="search-text"
                    ></input>
                    <div className="search-flex-d-1">
                        <div className="search-tag-box">
                            <input
                                placeholder="Enter tag"
                                onChange={(e) => setCurTag(e.target.value)}
                                value={curTag}
                                className="search-input-tags"
                            ></input>
                            <button onClick={(e) => createTag(e)}>
                                Add tag
                            </button>
                            <button onClick={(e) => deleteAll(e)}>
                                Delete all tags
                            </button>
                        </div>
                        <div className="search-tags">
                            {tags.map((tag) => (
                                <span key={tag} className="search-tag">
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        onClick={() => deleteTag(tag)}
                                        fontSize={16}
                                        className="search-delete-tag"
                                    />
                                    <span>&nbsp;&nbsp;{tag}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="search-flex-2">
                    <select
                        className="search-district"
                        name="district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <option value="">Choose district</option>
                        {districts.map((district) => (
                            <>
                                <option value={district}>{district}</option>
                            </>
                        ))}
                    </select>
                    <div className="search-time">
                        <div className="search-from">
                            <span>From:</span>&nbsp;
                            <span>Month:</span>&nbsp;
                            <select
                                onChange={(e) => setFromMonth(e.target.value)}
                                value={fromMonth}
                            >
                                <option value={0}>Choose month</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            &nbsp;
                            <span>Year:</span>&nbsp;
                            <select
                                onChange={(e) => setFromYear(e.target.value)}
                                value={fromYear}
                            >
                                <option value={0}>Choose year</option>
                                {[...Array(2024)]
                                    .map((_, i) => i + 1)
                                    .reverse()
                                    .slice(0, 50)
                                    .map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="search-to">
                            <span>To:</span>&nbsp;
                            <span>Month:</span>&nbsp;
                            <select
                                onChange={(e) => setToMonth(e.target.value)}
                                value={toMonth}
                            >
                                <option value={0}>Choose month</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            &nbsp;
                            <span>Year:</span>&nbsp;
                            <select
                                onChange={(e) => setToYear(e.target.value)}
                                value={toYear}
                            >
                                <option value={0}>Choose year</option>
                                {[...Array(2024)]
                                    .map((_, i) => i + 1)
                                    .reverse()
                                    .slice(0, 50)
                                    .map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Search"
                    className="search-submit"
                ></input>
            </form>
            <Result result={result} />
        </div>
    )
}

export default Search
