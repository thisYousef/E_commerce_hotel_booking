import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCircleInfo, faImages, faLocationDot, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderCartButton from './HeaderCartButton';
import "./Navbar.css";
import { useAuth } from '../../context/AuthContext';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import Swal from 'sweetalert2';
// import Search from '../../Search';

const Navbar = ({ onShowCart }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { currentUser, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      Swal.fire({
        text: "Logout successfully!",
        icon: "success"
      });
      navigate('/');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }
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
            <li><NavLink to="/" onClick={closeMobileMenu}
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
              {currentUser && <>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Avatar src="/broken-image.jpg" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleLogout} className='logout-btn'>Logout</MenuItem>
                </Menu>
              </>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;