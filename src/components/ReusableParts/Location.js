import classes from "./Location.module.css"
const Location = () => {
    return ( 
        <section className="container">
                  <div className={classes.location}>
                      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56103.43073671545!2d34.54162617390938!3d28.495671773800474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ab4b29bfad585f%3A0xac65238d793319bf!2z2K_Zh9io2Iwg2LPYp9mG2Kog2YPYp9iq2LHZitmG2Iwg2KzZhtmI2Kgg2LPZitmG2KfYoQ!5e0!3m2!1sar!2seg!4v1694624385497!5m2!1sar!2seg" 
                      width="100%" height="450" allowfullscreen="" 
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
        </section>
     );
}
 
export default Location;