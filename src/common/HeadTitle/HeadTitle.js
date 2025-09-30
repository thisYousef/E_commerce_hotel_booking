import { Link, useLocation } from "react-router-dom";
import classes from "./HeadTitle.module.css"
import useUnsplashImages from "../../components/ReusableParts/ApiFeching";
const HeadTitle = () => {
    const location = useLocation()
    const { imagesApi, error } = useUnsplashImages('sea', 1, 44, "landscape");
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return ( 
       <>
        <section className={classes.heading}>
        {imagesApi?.map((item, index) => {
                    return (
                              <div className={classes.background} key={index}>
                                    {<img key={item.id} src={item.urls.regular} alt={item.alt_description} loading="lazy"/>}
                              </div>
                            )
          })}
            <div className={classes.container}>
                <h2>{location.pathname.split("/")[1]}</h2>
                <button type="button" aria-label="back to home">
                    <Link to='/'>Home  / </Link>
                    <span>{location.pathname.split("/")[1]}</span>
                </button>
            </div>
        </section>
       </> 
     );
}
export default HeadTitle;