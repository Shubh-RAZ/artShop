import './Home.css'
import Front from './Front/Front';
import Cardbox from './cardBox/Cardbox';
import Conclude from './Conclude/Conclude';
import ReviewCard from './ReviewCard/ReviewCard';
import Category from './Category/Category';
const Home = () => {
    return ( 
        <div className="home">
            <Front></Front>
            <Category></Category>
            <Cardbox></Cardbox>
            <ReviewCard></ReviewCard>
            <Conclude></Conclude>
        </div>
     );
}
 
export default Home;