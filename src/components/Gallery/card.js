import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Card = ({title, images}) => {
    const [popup, setPopup] = useState(false)
    const toggleModal = () => {
        setPopup(!popup)
    }
    return ( 
        <>
            <div className="items">
                <div className="img" onClick={toggleModal}>
                    <img src={images} alt={title} loading="lazy"/>
                    <FontAwesomeIcon icon={faImage} />
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
            {popup && (
            <div className="popup" onClick={toggleModal}>
                <div className="hide"></div>
                <div className="popup-content" >
                    <img src={images} alt={title} loading="lazy"/>
                </div>
            </div>
            )}
            
        </>
     );
}
 
export default Card;