import HeadTitle from "../../common/HeadTitle/HeadTitle";
import Card from "./card";
import GalleryData from "./galleryData";
import "./gallery.css"

const gallery = () => {
    return ( 
        <>
            <HeadTitle />
            <section className="gallery top">
                <div className="container grid">
                    {GalleryData.map((value) => {
                        return <Card images={value.img} title={value.title} loading="lazy"/>
                    })}
                </div>
            </section>
        </>
     );
}
 
export default gallery;