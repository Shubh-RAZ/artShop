import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
const Message = (props) => {
    return ( 
        <div className="welcome">
        <div className="content-welcome">
             <div className="welcome-1">Order {props.result}</div>
             <div className="welcome-sm">
                 <div className="greet">Order</div>
                 <div className="name"> {props.result}</div>
             </div>
             <div className="welcome-2">{props.message}</div>
           <Link to="/" style={{textDecoration:'none'}}> <div className="go-home">Go Back To Home</div> </Link>

         </div>
     </div>
     );
}
 
export default Message;