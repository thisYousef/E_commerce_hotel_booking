import { motion, useScroll } from 'framer-motion';
import Slide from '../HomeSection/Slide';
import HomeAbout from '../HomeSection/HomeAbout';
import DestinationHome from '../HomeSection/Destina/destinationHome';
import MostPopular from '../HomeSection/popular/MostPopular';
import News from '../HomeSection/New/News';
import Download from '../HomeSection/Download/Download';
import BasicTabs from '../HomeSection/Rooms/CustomTabPanel';
import Testimonial from '../HomeSection/Testimonial/Testimonial';
import { useEffect, useState } from 'react';
import SkeletonLoader from '../../Skeleton';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Simulate loading data
    const fetchData = async () => {
      // Simulate a data fetch with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='home-section'>
        {loading ? <SkeletonLoader />
          : <>

            <Slide />
            <HomeAbout />
            <DestinationHome />
            <MostPopular />
            <News />
            <Download />
            <BasicTabs />
            <Testimonial />
            <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
          </>}
      </section>
    </>
  );
}
export default Home;