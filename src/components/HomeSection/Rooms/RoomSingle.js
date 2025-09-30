import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import { Link } from "react-router-dom";
import BasicTabs from "./CustomTabPanel";
import Location from "../../ReusableParts/Location";
import useUnsplashImages from "../../ReusableParts/ApiFeching";
import classes from "./RoomSingle.module.css"
import "./../Home.css"

const RoomSingle = () => {
    const [current, setCurrent] = useState(0);
    const { imagesApi, error } = useUnsplashImages('beautiful-room', 8, 1, "landscape");
    const { imagesApi: person, error: error1 } = useUnsplashImages('person', 6, 2, "landscape");

    useEffect(() => {
      const interval = setInterval(() => {
          setCurrent((prevCurrent) => (prevCurrent === imagesApi.length - 2 ? 0 : prevCurrent + 2));
        }, 3500);
      
        return () => clearInterval(interval);
    }, [imagesApi.length]);

      if (error || error1) {
        return <div>Error: {error.message}</div>;
      }
    const length = imagesApi.length;
    const nextSlide = () => {
        setCurrent(current === length - 2 ? 0 : current + 2)
      }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 2 : current - 2)
      }
    if (!Array.isArray(imagesApi) || imagesApi.length <= 0) {
        return null
    }
    return ( 
        <>
          <HeadTitle />
          <section className={classes.form}>
                <div>
                  <form className="flex">
                    <div className={classes.select}>
                      <span>BEDS</span>
                      <h2>1 Double Bed</h2>
                    </div>
                    <div className={classes.select}>
                      <span>ROOM SIZE</span>
                      <h2>870 sq ft / 132 sq m</h2>
                    </div>
                    <div className={classes.select}>
                      <span>OCCUPANCY</span>
                      <h2>2 adults (1 children)</h2>
                    </div>
                    <div className={classes.select}>
                      <span>BATHROOM</span>
                      <h2>Shower bath</h2>
                    </div><div className={classes.select}>
                      <h5>Price <span>$250</span> / Night</h5>
                      <button>Check Availability</button>
                    </div>
                  </form>
                </div>
          </section>
          <section className="parent flex">
                <div className="control-btn">
                    <button className="prev" onClick={prevSlide} aria-label="prev slide">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="next" onClick={nextSlide}  aria-label="next slide">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                {imagesApi.slice(current, current + 10).map((slide, index) => (
                    <div key={slide.id} className={index === current ? "slide active" : "slide"}>
                        <div className={classes.image}>
                              <img src={slide.urls.regular} alt={slide.alt_description} loading="lazy"/>
                        </div>
                    </div>
                ))}
            </section>
            <section className="container">
                <section className={classes.description}>
                  <h2>Description</h2>
                  <p className={classes.wrap}>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples.</p>
                  <p>So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's like the props in a furniture store—filler text makes it look like someone is home. The same Wordpress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like.</p>
                  <p>Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to keep everyone focused.</p>
                </section>
                <section className={classes.details}>
                  <div className="container">
                    <div className={classes.parent}>
                      <div>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                <h2>Amenities</h2>
                            </div>
                            <ul>
                              <li>
                                <Link to='room-single'>Refrigerator and water</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Air Conditioner Facilities</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Fruits are always available</Link>
                              </li>
                              <li>
                                <Link to='room-single'>2 Sets of nightwear</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Tables and Chairs</Link>
                              </li>
                              <li>
                                <Link to='room-single'>2 Elevator Available</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Room Side Belcony</Link>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div>
                        <div className={classes.img}>
                            {imagesApi.slice(2, 3).map((slide) => (
                                <div key={slide.id}>
                                    <img src={slide.urls.raw} alt={slide.alt_description} loading="lazy"/>
                                </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className={classes.parent}>
                    <div>
                        <div className={classes.img}>
                            {imagesApi.slice(3,4).map((slide) => (
                                <div key={slide.id}>
                                    <img src={slide.urls.raw} alt={slide.alt_description} loading="lazy"/>
                                </div>
                            ))}
                        </div>
                      </div>
                      <div>
                        <div className={classes.text_one}>
                            <div className={classes.title}>
                                <h2>Room Services</h2>
                            </div>
                            <ul>
                              <li>
                                <Link to='room-single'>Daily Cleaning</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Special Swimming Pool</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Free Parking</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Free-to-use smartphone </Link>
                              </li>
                              <li>
                                <Link to='room-single'>Free Wifi</Link>
                              </li>
                              <li>
                                <Link to='room-single'>2 Elevator Available</Link>
                              </li>
                              <li>
                                <Link to='room-single'>Room Side Belcony</Link>
                              </li>
                            </ul>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </section>
                <Location/>
                <section className="container">
                    <div className={classes.reviews}>
                            <h2>Room Reviews</h2>
                            <div className={classes.review}>
                                  <div className={classes.img}>
                                  {person.slice(0,1).map((slide) => (
                                      <div key={slide.id}>
                                          <img src={slide.urls.raw} alt={slide.alt_description} loading="lazy"/>
                                      </div>
                                  ))}
                                  </div>
                                  <div className={classes.content}>
                                      <div className="flex">
                                          <h3>John Wick Jr</h3>
                                          <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                          </Stack>
                                      </div>
                                      <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                                            accumsan lacus vel facilisis.
                                      </p>
                                  </div>
                            </div>
                            <div className={classes.review}>
                                  <div className={classes.img}>
                                  {person.slice(1,2).map((slide) => (
                                      <div key={slide.id}>
                                          <img src={slide.urls.raw} alt={slide.alt_description} loading="lazy"/>
                                      </div>
                                  ))}
                                  </div>
                                  <div className={classes.content}>
                                      <div className="flex">
                                          <h3>Hani Doe   </h3>
                                          <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                          </Stack>
                                      </div>
                                      <p>
                                          Quis ipsum suspendisse ultrices gravida. 
                                          Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                      </p>
                                  </div>
                            </div>
                    </div>
                </section>
            </section>
            <BasicTabs/>
        </>
     );
}
 
export default RoomSingle;