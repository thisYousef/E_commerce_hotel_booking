import { motion } from "framer-motion"
import "./Design.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClipboardList, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Background() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className="login-content">
      <h1 className="best">Find The Best <span className="online"> Hotel </span><br /> For You </h1>
      <motion.ul className="features"
        variants={container}
        initial="hidden"
        animate="visible">
        <motion.li variants={item} className="flex location">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Where Are You Going?</p>
        </motion.li>
        <motion.li variants={item} className="flex check">
          <FontAwesomeIcon icon={faClipboardList} />
          <p>Check In - Check Out</p>
        </motion.li>
        <motion.li variants={item} className="flex age">
          <FontAwesomeIcon icon={faUser} />
          <p>Adults - Children</p>
        </motion.li>
      </motion.ul>
      <img src={require('./../../images/sign.webp')} loading="lazy" alt="background for sign in" />
    </div>
  )
}
