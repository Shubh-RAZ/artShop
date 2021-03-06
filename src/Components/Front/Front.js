import './Front.css'
import Navbar from '../Navbar/Navbar'
import Instagram from '../Assets/instagram'
import Facebook from '../Assets/facebook'
import axios from 'axios'
const Front = () => {


    return ( 
        <div className="front">
            <Navbar secondaryColor="#fff" activeColor="#000" ></Navbar>
            <div className="homepage-box">
                <div className="homepage-left">
                    <div className="inside-home-left">
                        <div className="heading-1">We Make Art </div>
                        <div className="heading-1">For You </div>
                        <div className="desc-1">The Best Seller</div>
                        <div className="desc-2">In India</div>

                        <div className="social-connect">
                            <div className="connect-slogan">Connect with us</div>
                            <div className="connect-logo"> <Instagram></Instagram></div>
                            <div className="connect-logo"> <Facebook></Facebook></div>
                        </div>
                    </div>
                </div>

                <div className="homepage-right">
                    <img src="./home.png" className="img-home"></img>
                </div>
            </div>
        </div>
     );
}
 
export default Front;