import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faPhone } from "@fortawesome/free-solid-svg-icons";
import HeadTitle from "../common/HeadTitle/HeadTitle";
import "./SinglePage.css"
import { useEffect, useState } from "react";
import Sdata from "../components/Destination/Sdata";
const SinglePages = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])
    return (
        <>
            <HeadTitle />
            {item && (
                <section className="container top">
                    <div>
                        <Link to="/destination" className="primary-btn back">
                            <FontAwesomeIcon icon={faArrowLeftLong} /> Go Back
                        </Link>
                    </div>
                    <article className="content flex mtop">
                        <div className="main-content">
                            <img src={item.image} alt="city img" loading="lazy" />
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>
                            <div className="para flex_space">
                                <p>{item.sidepara}</p>
                                <p>{item.sidepara}</p>
                            </div>
                            <h2>What is the {item.title} City?</h2>
                            <p>{item.desc}</p>

                            <p>{item.desc}</p>
                        </div>
                        <div className="side-content">
                            <div className="box">
                                <h2>How We Can Help You?</h2>
                                <p>{item.sidepara}</p>
                                <button className="outline-btn" aria-label="contact us">
                                    <FontAwesomeIcon icon={faPhone} />
                                    Contact Us
                                </button>
                            </div>
                            <div className="box2">
                                <p>{item.sidepara}</p>
                            </div>
                        </div>
                    </article>
                </section>
            )}
        </>
    );
}

export default SinglePages;