import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCircleInfo, faImages, faLocationDot, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderCartButton from './HeaderCartButton';
import "./Navbar.css";
import { useAuth } from '../../context/AuthContext';
// import Search from '../../Search';

const Navbar = ({ onShowCart }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { currentUser, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleClick = () => (
    setClick(!click));
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]); // Empty dependency array means this runs only once on mount

  return (
    <>
      <nav className={`navbar ${isScrolled && 'scrolled'}`}>
        <div className='container flex_space'>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FontAwesomeIcon icon={faCircleXmark} />
              : <FontAwesomeIcon icon={faBars} />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <div className='icon-wrapper'><div className='menu'>Menu</div></div>
            </li>
            <li><NavLink to="/home" onClick={closeMobileMenu}
              className={({ isActive }) => isActive ? "isActive" : ""}>
              <div className='icon-wrapper'> <FontAwesomeIcon icon={faHouse} /> </div> Home</NavLink>
            </li>
            <li><NavLink to="/about" onClick={closeMobileMenu}
              className={({ isActive }) => isActive ? "isActive" : ""}>
              <div className='icon-wrapper'><FontAwesomeIcon icon={faCircleInfo} /></div> About</NavLink>
            </li>
            <li><NavLink to="/gallery" onClick={closeMobileMenu}
              className={({ isActive }) => isActive ? "isActive" : ""}>
              <div className='icon-wrapper'><FontAwesomeIcon icon={faImages} /></div> Gallery</NavLink>
            </li>
            <li><NavLink to="/destination" onClick={closeMobileMenu}
              className={({ isActive }) => isActive ? "isActive" : ""}>
              <div className='icon-wrapper'><FontAwesomeIcon icon={faLocationDot} /></div> Destination</NavLink>
            </li>
            <li><NavLink to="/blog" onClick={closeMobileMenu}
              className={({ isActive }) => isActive ? "isActive" : ""}>
              <div className='icon-wrapper'><FontAwesomeIcon icon={faBlog} /></div> Blog</NavLink>
            </li>
          </ul>
          <ul className="login-area flex">
            <li>
              <NavLink to={"/checkout"}>
                <HeaderCartButton onClick={onShowCart} />
              </NavLink>
            </li>
            {/* <li><Search/></li> */}
            <li>
              {currentUser && <button onClick={handleLogout} className='logout-btn'>Logout</button>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;