import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Dcard = ({item: {id, image, title, desc, sidepara, paraImage_one, paraImage_two}}) => {
    return ( 
        <>
            <div className="items">
                <div className="img">
                    <img src={image} alt={title} loading="lazy"/>
                    <Link to={`/singlepage/${id}`} className="blogitem-link">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
     );
}
 
export default Dcard;