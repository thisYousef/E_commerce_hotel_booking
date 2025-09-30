import useUnsplashImages from "../../ReusableParts/ApiFeching";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import classes from "./destination.module.css";
import { useEffect, useState } from "react";
const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.7
      }
    }
  };
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
const DestinationHome = () => {
    const { imagesApi, error } = useUnsplashImages('popular-city', 4, 12, "portrait");
    const [firstRef, firstInView] = useInView({ threshold: 0.5});
    const [secondRef, secondInView] = useInView({ threshold: 0.5});
    const [firstAnimationTrigger, setFirstAnimationTrigger] = useState(false);
    const [secondAnimationTrigger, setSecondAnimationTrigger] = useState(false);
    useEffect(() => {
      if (firstInView && !firstAnimationTrigger) {
        setFirstAnimationTrigger(true);
      };  
      if (secondInView && !secondAnimationTrigger) {
        setSecondAnimationTrigger(true);
      };
    }, [firstInView, secondInView, firstAnimationTrigger, secondAnimationTrigger]);
    if (error) {
        return <div>Error: {error.message}</div>;
    };
    return ( 
        <>
            <section>
                <div className="full_container flex top">
                    <motion.div className={classes.text} ref={firstRef} initial="hidden" animate={firstAnimationTrigger ? 'visible' : 'hidden'} variants={container}>
                        <span className="title">Populer Destination</span>
                        <h2 className="title">Choose Your Country</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                         All the Lorem Ipsum generators.</p>
                    </motion.div>
                    <div className={classes.content}>
                        <div className={classes.images}>
                            <motion.div className={classes.one}
                           ref={firstRef} initial="hidden" animate={firstAnimationTrigger  ? 'visible' : 'hidden'} variants={container}>
                            {imagesApi.slice(0,2).map((slide, index) => (
                                <motion.div key={index} variants={item} >
                                    <div className={classes.box} >
                                        <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy"/>
                                        <div className={classes.text}>
                                            <div className={classes.city}>
                                                <h3>Firenze</h3>
                                                <span>Brașov, Italy</span>
                                                <div className={classes.cover}></div>
                                                <div className={classes.shadow}></div>
                                            </div> 
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            </motion.div>
                            <motion.div className={classes.two}
                           ref={secondRef} initial="hidden" animate={secondAnimationTrigger ? 'visible' : 'hidden'} variants={container} transition={{ delay: 9 }}>
                            {imagesApi.slice(2).map((slide, index) => (
                                <motion.div key={index} variants={item} >
                                    <div className={classes.box}>
                                        <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy"/>
                                        <div className={classes.text}>
                                            <div className={classes.city}>
                                                <h3>Carisbrooke</h3>
                                                <span>London, UK</span>
                                                <div className={classes.cover}></div>
                                                <div className={classes.shadow}></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </motion.div>
                            ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DestinationHome;