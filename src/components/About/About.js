import AboutCard from "./AboutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import useUnsplashImages from "../ReusableParts/ApiFeching";
import Location from "../ReusableParts/Location";
import { motion } from "framer-motion";

const About = () => {
    const { imagesApi, error } = useUnsplashImages('business-discussion-', 1, 2, "landscape");
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const variants1 = {
        hidden: { rotateX: -90, opacity: 0 },
        visible: { rotateX: 0, opacity: 1 },
      };
    return ( 
        <>
            <HeadTitle/>
            <section className="about top">
                <div className="container">
                    <AboutCard/>
                </div>
            </section>
            <section className="features top">
                <div className="container aboutCard flex_space">
                    <div className="row image1">
                    {imagesApi.map((img) => (
                                <img key={img.id} src={img.urls.small} alt={img.alt_description} loading="lazy"/>
                    ))}
                </div>
                    <div className="row row1">
                        <h2 className="title">
                            Our <span>Features</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit ad voluptatum quisquam odio perferendis et, doloribus ipsa nulla necessitatibus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit ad voluptatum quisquam odio perferendis et, doloribus ipsa nulla necessitatibus?</p>
                        <motion.button initial="hidden"
                              animate="visible"
                              exit="hidden"
                              aria-label="explore more"
                              variants={variants1}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className='btn'>
                                Explore More <FontAwesomeIcon icon={faArrowRight} />
                        </motion.button>
                    </div>
                </div>
            </section>
            <Location/>
        </>
     );
}
 
export default About;