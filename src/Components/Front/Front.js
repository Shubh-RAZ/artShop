import './Front.css'
import Navbar from '../Navbar/Navbar'
import Instagram from '../Assets/instagram'
import Facebook from '../Assets/facebook'
const Front = () => {
    return ( 
        <div className="front">
            <Navbar secondaryColor="#fff" activeColor="#000" active="home" ></Navbar>
            <div className="homepage-box">
                <div className="homepage-left">
                    <div className="inside-home-left">
                        <div className="heading-1">We Make art </div>
                        <div className="heading-1">for you </div>
                        <div className="desc-1">Lorem ipsum dummy</div>
                        <div className="desc-2">text generator</div>

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