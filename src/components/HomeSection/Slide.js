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
      setTextFunction("");
      const interval = setInterval(() => {
        if (index <= text.length) {
          setTextFunction(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return interval;
    };

    // Animate title
    titleTimer = animateText(title, setTitleText);

    // Animate subtitle after title
    setTimeout(() => {
      subtitleTimer = animateText(subtitle, setSubtitleText);
    }, title.length * 30);

    // Animate button after subtitle
    setTimeout(() => {
      buttonTimer = animateText(button, setButtonText);
    }, (title.length + subtitle.length) * 30);

    // Clear intervals on component unmount
    return () => {
      clearInterval(titleTimer);
      clearInterval(subtitleTimer);
      clearInterval(buttonTimer);
    };
  }, [title, subtitle, button]);

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
      <section className="relative overflow-hidden group ">
        <div className="control-btn">
          <button
            className={`absolute top-1/2 z-40 transition-all duration-400 ease-in-out text-white p-3 text-base border border-emerald-500 rounded-full hover:bg-emerald-500 xl:p-2 xl:text-sm -left-[20%] group-hover:left-5`}
            onClick={prevSlide}
            aria-label="prev slide"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className={`absolute top-1/2 z-40 transition-all duration-400 ease-in-out text-white p-3 text-base border border-emerald-500 rounded-full hover:bg-emerald-500 xl:p-2 xl:text-sm -right-[20%] group-hover:right-5`}
            onClick={nextSlide}
            aria-label="next slide"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {/* Map over the slides  */}
          {imagesApi.slice(current, current + 5).map((image) => (
            <motion.div
              className="flex-shrink-0 w-screen relative"
              key={image.id}

            >
              <div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-[2rem] h-[99.6%] z-10"></div>

              <div className="w-full">
                <img
                  className="h-[80vh] w-screen object-cover"
                  src={image.urls.regular}
                  alt={image.alt_description}
                  loading="lazy"
                />
              </div>
              <motion.div className="absolute top-[30%] sm:top-[35%] px-[20%] pr-[42%] z-20">
                <motion.h2
                  className="text-white mb-6 text-[58px] xl:text-[35px] md:text-2xl md:leading-8 sm:text-lg sm:leading-4 sm:mt-[55px]"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {titleText}
                </motion.h2>
                <motion.p
                  className="text-white mb-6 md:text-sm md:leading-8 sm:text-[9px] sm:leading-4"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {subtitleText}
                </motion.p>
                <motion.button
                  className="btn hover:text-white md:p-2 md:text-xs sm:p-[2px_10px] sm:text-[8px] sm:mt-4"
                  variants={variants1}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {buttonText}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Slide;