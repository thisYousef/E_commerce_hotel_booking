import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useUnsplashImages from "../ReusableParts/ApiFeching";
import "./About.css";

const AboutCard = () => {
  const { imagesApi, error } = useUnsplashImages('view-for-enjoying', 2, 9, "portrait");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.8 // Trigger animation when 50% of the component is visible
  });
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    
      const containerVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: 'easeInOut' }
        }
      };

  
      useEffect(() => {
          setIsLoaded(true);
          setIsInView(inView);
        
      }, [inView]);
    if (error) {
        return <div>Error: {error.message}</div>;
    };
    const variants1 = {
      hidden: { rotateX: -90, opacity: 0 },
      visible: { rotateX: 0, opacity: 1 },
    };
    return ( 
        <>
            <div className="aboutCard mtop flex_space">
                    <motion.div className="row image" initial={false}
                        ref={ref}
                        animate={
                          isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1, delay: .3 }}>
                            {imagesApi.map((img) => (
                                <img key={img.id} src={img.urls.small} alt={img.alt_description} loading="lazy"/>
                            ))}
                    </motion.div>
                <motion.div className="row row1" 
                         ref={ref}
                         initial="hidden"
                         animate={inView ? 'visible' : 'hidden'}
                         variants={containerVariants}>
                    <span ref={ref} className="title" >About Us</span>
                    <h1 >A Best Place to Enjoy </h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit odio veritatis qui, voluptate debitis ad nemo accusantium quisquam voluptatibus.</p>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit odio veritatis qui, voluptate debitis ad nemo accusantium quisquam voluptatibus.</p>
                    <motion.button initial="hidden"
                          animate="visible"
                          exit="hidden"
                          aria-label="explore more"
                          variants={variants1}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className='btn'>
                          Discover More <FontAwesomeIcon icon={faArrowRight} />
                      </motion.button>
                </motion.div>
            </div>
        </>
     );
}
export default AboutCard;