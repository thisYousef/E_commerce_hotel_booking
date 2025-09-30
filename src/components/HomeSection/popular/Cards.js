import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import PopularData from "./PopData";
import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1,
  }
};

const Cards = () => {
  const [firstRef, firstInView] = useInView({ threshold: 0.5});
  const [firstAnimationTrigger, setFirstAnimationTrigger] = useState(false);
  useEffect(() => {
    if (firstInView && !firstAnimationTrigger) {
      setFirstAnimationTrigger(true);
    };  
  }, [firstInView, firstAnimationTrigger]);
  const CartCTX = useContext(CartContext)  
  var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,

            }
          },
        ]
      };
      
      const addToCartHandler = (amount, name, price, id, image) => {
          CartCTX.addItem({
            amount: amount,
            name: name,
            price: price,
            id: id,
            image: image
          })
      }
      const submitHandler = (e) => {
        e.preventDefault();
      }
    return ( 
        <>
        <motion.div ref={firstRef} initial="hidden" animate={firstAnimationTrigger  ? 'visible' : 'hidden'} variants={container}>
        <Slider {...settings}>
            {PopularData.map((value, index) => {
                return (
                  <motion.form className="cards" key={value.id} onSubmit={submitHandler} variants={item}>
                        <div className="item">
                            <div className="imgae">
                                <img src={value.image} alt="img for hotel" loading="lazy"/>
                                <div className="add">
                                    <button onClick={() => addToCartHandler(1, value.name, value.price, value.id, value.image)}><FontAwesomeIcon icon={faCartShopping} /></button>
                                </div>
                                <div className="cont-inside">
                                  <FontAwesomeIcon icon={faLocationDot} />
                                  <label>{value.country}</label>
                                </div>
                            </div>
                        <div className="rate">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="details">
                            <h3>{value.name}</h3>
                            <div className="boarder">
                                <h4>
                                    {value.price} / <span>Per Night</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </motion.form>
                )
        })}
        </Slider>
        </motion.div>
        </>
     );
}
export default Cards;