const Card = ({cover, title, desc}) => {
    return ( 
        <>
            <div className='box'>
                <div className='img'>
                    <img src={cover} alt='hotels' loading="lazy"/>
                </div>
                <div className='details'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>
     );
}
export default Card;