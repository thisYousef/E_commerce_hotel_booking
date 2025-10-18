import "./Download.css"

const Download = () => {
    return (
        <>
            <section className="download top">
                <div className="container flex_space">
                    <div className="row">
                        <span>Download Our App</span>
                        <h2>Wow! Get This Template App For Your Mobile</h2>
                        <ul>
                            <li>&#10003; Find nearby hotel in your network with templete</li>
                            <li>&#10003; Get paperless confirmation</li>
                            <li>&#10003; Make changes whenever, wherever</li>
                            <li>&#10003; 24/7 customer service in more than 40 languages</li>
                            <li>&#10003; No booking or credit card fees</li>
                        </ul>
                        <div className="img flex">
                            <img src={require('./../../../images/Download/appstore-button.png')} alt="App-Store " loading="lazy" />
                            <img src={require('./../../../images/Download/google-play-button.png')} alt="google-play" loading="lazy" />
                        </div>
                    </div>
                    <div className="row row2">
                        <img src={require('./../../../images/Download/app-image-1.png')} alt="AppImage" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Download;