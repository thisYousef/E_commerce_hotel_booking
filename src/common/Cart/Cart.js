import { useCallback, useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = useCallback(
    (id) => {
      cartCtx.removeItem(id);
    },
    [cartCtx]
  );

  const cartItemAddHandler = useCallback(
    (item) => {
      console.log(item);
      if (item.amount < 3) {
        cartCtx.addItem({ ...item, amount: 1 });
      }

    },
    [cartCtx]
  );

  return (
    <Checkout
      items={cartCtx.items}
      totalAmount={totalAmount}
      hasItems={hasItems}
    >
      {hasItems ? (
        <>
          <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                image={item.image}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            ))}
          </ul>
          <div className={classes.actions}>
            <button className={classes.button}>Check In</button>
            <button className={classes.shopping}>Continue Shopping</button>
          </div>
        </>
      ) : (
        <>
          <div className={classes.empty}>
            <p>Your cart is currently empty.</p>
            <p>Continue shopping.</p>
          </div>
        </>
      )}
    </Checkout>
  );
};

export default Cart;