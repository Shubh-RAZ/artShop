import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo'
import './Navbar.css'
import axios from 'axios';
import Logout from '../Assets/logout'
const Navbar = (props) => {

    const [ showPhoneMenu , setPhoneMenu ] = useState(false)
    const [ name , setName ] = useState()
    const [ email , setEmail ] = useState()

    useEffect( () => {
        const token = localStorage.getItem('token')

        if ( token && token.length >= 4){
            axios.post('http://artwindow.herokuapp.com/art/verifyUser', {
                token
            })
            .then ( res => {
                if( res.data === 'failure'){
                    // window.location.assign('/')
                    console.log('failed')
                }
                else{
                    axios.post('http://artwindow.herokuapp.com/art/getUser', {id :res.data})
                    .then ( resp => {
                        console.log(resp.data)
                        setName(resp.data.name)
                        setEmail(resp.data.email)
                    })
            
                    .catch( err => {
                        console.log(err)
                    })
            
                }
            })
      
            .catch( err => {
                console.log(err)
            })
        }
     
    } , [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.assign('/')
    }
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
                  <div className="logout">
                      <div className="inside-log">
                      <div className="logout-svg" onClick={handleLogout}> <Logout></Logout></div>
                      <div className="profile-name">{name}</div>
                      <div className="profile-email">{email}</div>
                      </div>
                  </div>
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
                       <div className="phone-profile">Logged in as <br></br> {name} &nbsp; | &nbsp; {email}</div>
                       <div className="phone-log"> 
                        <div className="phone-logout" onClick={handleLogout}> 
                        <Logout></Logout> 
                        </div>
                        <div className="log-text">Logout </div>
                    </div>
                           
                        </div> : null }

                
                        </div> 

                   
                
        </div>
     );
}
 
export default Navbar;