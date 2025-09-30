import classes from "./Cart.module.css";

const Checkout = ({ items, totalAmount, hasItems, children }) => {
  return (
    <div className={classes.checkout}>
      {/* Cart Summary Section */}
      <div className={classes.summary}>
        <h2>Booking Summary</h2>
        {hasItems && (
          <>
            <div className={classes["summary-items"]}>
              {items.map((item) => (
                <div key={item.id} className={classes["summary-item"]}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes["summary-image"]}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Nights: {item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes["total-amount"]}>
              <span>Total:</span>
              <span>{totalAmount}</span>
            </div>
          </>
        )}
      </div>

      {/* Cart Content Section */}
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Checkout;