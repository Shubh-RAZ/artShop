import './Conclude.css'
import Flask from '../Assets/flask';
import Dino from '../Assets/dino';
import Heart from '../Assets/heart';
const Conclude = () => {
    return ( 
        <div className="conclude">
            <div className="conclude-slogan">
                <div className="text-conclude">Toys</div>
                <div className="flask"> <Flask></Flask></div>
                <div className="text-conclude">with</div>
                <div className="heart-conclude"><Heart color="salmon"></Heart></div>
                <div className="text-conclude">By Team 007</div>
                <div className="dino-conclude">
                <Dino></Dino>
            </div>
            
            </div>

            <div className="dino-conclude-sm">
                <Dino></Dino>
            </div>

       
        </div>
     );
}
 
export default Conclude;