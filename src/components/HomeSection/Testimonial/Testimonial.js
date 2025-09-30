import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useUnsplashImages from "../../ReusableParts/ApiFeching";
import { Rating, Stack } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const Testimonial = () => {
    const [, setCurrent] = useState(0)
    const { imagesApi: person, error } = useUnsplashImages('man', 6, 1, "portrait");

      useEffect(() => {
        const interval = setInterval(() => {
                    setCurrent((prevCurrent) => (prevCurrent === person.length - 1 ? 0 : prevCurrent + 1));
                  }, 3500);
                
                  return () => clearInterval(interval);
      }, [person.length])

      if (error) {
        return <div>Error: {error.message}</div>;
      }
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return ( 
        <>
            <section className="Testimonial mtop">
                <div className="container">
                <span className="title">What Say Clients</span>
                <h2 className="title">Our Clients are <br/> Important to Us</h2>
                <Slider {...settings} className="flex">
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself,   me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(0,1).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div>   
                            <div className="text">
                                <h5>Oliver Khan</h5>
                                <p>Canda</p>
                            </div>                                   
                        </div>
                    </div>
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself, me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(1,2).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div>  
                            <div className="text">
                                <h5>Lucas Moura</h5>
                                <p>England</p>
                            </div>                                    
                        </div>
                    </div>
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself, me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(2,3).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div>    
                            <div className="text">
                                <h5>Mateo Messi</h5>
                                <p>Brazil</p>
                            </div>                                  
                        </div>
                    </div>
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself, me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(3,4).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div>  
                            <div className="text">
                                <h5>Alexander</h5>
                                <p>Canda</p>
                            </div>                                    
                        </div> 
                    </div>
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself, me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(4,5).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div>   
                            <div className="text">
                                <h5>David Meera</h5>
                                <p>Singapore</p>
                            </div>                                   
                        </div>
                    </div>
                    <div className="client">
                        <div className="rating">
                            <ul>
                                <li>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="quote">
                            <p>
                                “The trip was incredible. I got to see so many places I wouldn't 
                                have by myself, me and my husband really enjoyed a lot.”
                            </p>
                        </div>
                        <div className="client-info flex">
                            <div className="img">
                                    {person.slice(5,6).map((slide) => (
                                        <div key={slide.id}>
                                            <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy" />
                                        </div>
                                    ))}
                            </div> 
                            <div className="text">
                                <h5>John Doe</h5>
                                <p>Italia</p>
                            </div>                                     
                        </div>         
                    </div>   
                </Slider>
                </div>
            </section>
        </>
     );
}
 
export default Testimonial;