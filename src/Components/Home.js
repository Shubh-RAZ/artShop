import './Home.css'
import Front from './Front/Front';
import Cardbox from './cardBox/Cardbox';
import Conclude from './Conclude/Conclude';
const Home = () => {
    return ( 
        <div className="home">
            <Front></Front>
            <Cardbox></Cardbox>
            <Conclude></Conclude>
        </div>
     );
}
 
export default Home;