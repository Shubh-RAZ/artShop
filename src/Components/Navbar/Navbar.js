import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo'
import './Navbar.css'
const Navbar = (props) => {

    const [ showPhoneMenu , setPhoneMenu ] = useState(false)
    return ( 
        <div className="Navbar">
            <div className="navbar-desktop">
                <div className="logo-nav">
                    <Logo></Logo>
                </div>
                <div className="navbar-content">
                <Link to="/" style={{textDecoration:'none'}}> <div className={ props.active === "home" ? "active-navbar-list" : "navbar-list" }>Home </div> </Link>
                    <Link to="/bout" style={{textDecoration:'none'}}>  <div className={ props.active === "about" ? "active-navbar-list" : "navbar-list" }>About us</div> </Link>
                  <Link to="/reach" style={{textDecoration:'none'}}>  <div className={ props.active === "contact" ? "active-navbar-list" : "navbar-list" }>Contact us</div> </Link>
                  <Link to="/projects" style={{textDecoration:'none'}}> <div className={ props.active === "projects" ? "active-navbar-list" : "navbar-list" }>Cart</div> </Link>
                </div>
            </div>

            <div className="navbar-phone">
                <div className="logo-nav-phone">
                        <Logo></Logo>
                    </div>
                </div>

                <div className="hamburger" onClick={() => setPhoneMenu(!showPhoneMenu)}>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" } ></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }></div>
                </div>

                    <div className={showPhoneMenu ? "phone-menu" : "hidden-menu" }>
                       { showPhoneMenu ? <div className="phone-menu-content">
                       <Link to="/" style={{textDecoration:'none'}}>     <div className="hamburger-phone-list">Home</div> </Link>
                       <Link to="/bout" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list">About us</div> </Link>
                       <Link to="/reach" style={{textDecoration:'none'}}>    <div className="hamburger-phone-list">Contact us</div>  </Link>
                       <Link to="/projects" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list">Cart</div>    </Link>
                           
                        </div> : null }

                
                        </div> 
                
        </div>
     );
}
 
export default Navbar;