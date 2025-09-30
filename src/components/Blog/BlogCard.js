import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({item : {id, date, catgeory, title, cover, para, desc}}) => {
    return ( 
        <>
            <div className="items">
                <Link to={`/blogsingle/${id}`} className="blogItem-link">
                <div className="img">
                    <img src={cover} alt="blog card img" loading="lazy"/>
                </div>
                <div className="catgeory flex_space">
                    <span>{date}</span>
                    <label>{catgeory}</label>
                </div>
                <div className="details">
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                    <span>Discover more </span>
                </Link>
            </div>
        </>
     );
}
 
export default BlogCard;