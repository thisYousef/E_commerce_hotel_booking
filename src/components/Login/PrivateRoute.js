import { Navigate, Outlet, useLocation } from "react-router-dom"
import { auth } from "../../firebase";
// import Home from "../Pages/Home";
// import Blog from "../Blog/Blog";
// import About from "../About/About";
// import Gallery from "../Gallery/gallery";
// import Destination from "../Destination/Home";
// import SinglePages from "../../singlePage/SinglePages";
// import RoomSingle from "../HomeSection/Rooms/RoomSingle";
// import BlogSingle from "../Blog/blog-single-page/BlogSingle";
// import Dashboard from "./Dashboard";
import Navbar from "../../common/navbar/Navbar";
import { useState } from "react";
import Cart from "../../common/Cart/Cart";
import CartProvider from "../../store/CartProvider";

  export default function PrivateRoutes() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const location = useLocation();
    // const showCartHandler = () => {
    //   setCartIsShown(true);
    // };
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
    
    // const matchPath = (pattern, path) => {
    //   const regex = new RegExp(`^${pattern.replace(':id', '\\d+')}$`);
    //   return regex.test(path);
    // };
    return auth.currentUser ? (
       <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {/* <Navbar onShowCart={showCartHandler} /> */}
          <Navbar />
          <Outlet/>
          {/* {location.pathname === '/home' && <Home />} 
          {location.pathname === '/about' && <About/>}
          {location.pathname === '/gallery' && <Gallery/>}
          {location.pathname === '/destination' && <Destination/>}
          {location.pathname === '/blog' && <Blog/>}
          {location.pathname === '/room-single' && <RoomSingle/>}
          {matchPath('/singlepage/:id', location.pathname) && <SinglePages />}
          {matchPath('/blogsingle/:id', location.pathname) && <BlogSingle />}
          {location.pathname === '/dashboard' && <Dashboard/>} */}
      </CartProvider>
    ) : (
      // keep the previous navigation stack
      <Navigate to="/register" state={{ from: location }} replace />
    );
  }