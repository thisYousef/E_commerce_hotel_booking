import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import { useEffect, useState } from "react";
import BlogData from "../BlogData";
const BlogSingle = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        let item = BlogData.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])
    return ( 
        <>
            <HeadTitle/>
            {item && (
            <section className="single-page top">
                <div className="container flex">
                    <Link to="/blog" className="primary-btn back">
                        <FontAwesomeIcon icon={faArrowLeftLong} /> Go Back
                    </Link>
                </div>
                <article className="container content flex">
                    <div className="main-content">
                        <img src={item.cover} alt="blog single img" loading="lazy"/>
                        <div className="category flex_space">
                            <span>{item.date}</span>
                            <label>{item.catgeory}</label>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p>{item.desc}</p>

                        <h3>Two Column Text Sample</h3>
                        <div className="para flex_space">
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    <div className="side-content">
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
 
export default BlogSingle;