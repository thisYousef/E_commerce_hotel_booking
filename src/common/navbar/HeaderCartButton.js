import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css"
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = ({onClick}) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCTX = useContext(CartContext);
  const {items} = cartCTX;

  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  const btnClasses = `${classes.btn} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;}
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };}, [items]);
    return (
        <button className={btnClasses} onClick={onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span className={classes.badge}>{numOfCartItems}</span>
        </button>
      );
}
export default HeaderCartButton