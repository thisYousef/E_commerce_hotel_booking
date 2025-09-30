import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useUnsplashImages from "../ReusableParts/ApiFeching";
import "./Home.css";

const Slide = () => {
  const { imagesApi, error } = useUnsplashImages(
    "hotel-sea-view",
    5,
    3,
    "landscape"
  );

  const title = "The Hotel Booking &\nResort";
  const subtitle = "Make Your Life Better and Bright! You must trip with Us!";
  const button = "Book A Room";

  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let titleTimer, subtitleTimer, buttonTimer;

    const animateText = (text, setTextFunction) => {
      let index = 0;
      setTextFunction(""); // Clear existing text
      const interval = setInterval(() => {
        if (index <= text.length) {
          setTextFunction(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Adjust speed as needed
      return interval;
    };

    // Animate title
    titleTimer = animateText(title, setTitleText);

    // Animate subtitle after title
    setTimeout(() => {
      subtitleTimer = animateText(subtitle, setSubtitleText);
    }, title.length * 30); // Wait until title animation completes

    // Animate button after subtitle
    setTimeout(() => {
      buttonTimer = animateText(button, setButtonText);
    }, (title.length + subtitle.length) * 30); // Wait until subtitle animation completes

    // Clear intervals on component unmount
    return () => {
      clearInterval(titleTimer);
      clearInterval(subtitleTimer);
      clearInterval(buttonTimer);
    };
  }, [title, subtitle, button]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variants1 = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const nextSlide = () => {
    setCurrent((next) => (next === imagesApi.length - 1 ? 0 : next + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imagesApi.length - 1 : prev - 1));
  };

  if (!Array.isArray(imagesApi) || imagesApi.length <= 0) {
    return null;
  }
  return (
    <>
      <section className="container parent flex">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide} aria-label="prev slide">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next" onClick={nextSlide} aria-label="next slide">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {imagesApi.slice(current, current + 5).map((image, index) => (
          <AnimatePresence initial={false} custom={current} key={image.id}>
            <motion.div
              className={index === current ? "slide active" : "slide"}
              variants={variants1}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="image-container">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  loading="lazy"
                />
              </div>
              <motion.div
                className="slide-title"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <motion.h2
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {titleText}
                </motion.h2>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {subtitleText}
                </motion.p>
                <motion.button
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="btn"
                >
                  {buttonText}
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ))}
      </section>
    </>
  );
};
export default Slide;
