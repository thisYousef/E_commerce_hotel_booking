import { Navigate, Outlet, useLocation } from "react-router-dom"
import { auth } from "../../firebase";

import Navbar from "../../common/navbar/Navbar";
import { useState } from "react";
import Cart from "../../common/Cart/Cart";

export default function PrivateRoutes() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const location = useLocation();

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return auth.currentUser ? (

    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
}