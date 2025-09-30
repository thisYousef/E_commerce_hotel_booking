import { useState } from "react";
import "./../../Blog/BlogHome.css"
import BlogCard from "../../Blog/BlogCard";
import NewsData from "./NewsData";
const News = () => {
    const [items, ] = useState(NewsData)

    return ( 
        <>
            <section className="blog top">
                <div className="container">
                    <div className="">
                        <span className="title">Blog Post</span>
                        <h2 className="title">Our Latest News</h2>
                        <div className="line"></div>
                    </div>
                    <div className="content grid">
                        {items.map((item) => {
                            return <BlogCard key={item.id} item={item}/>
                        })}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default News;