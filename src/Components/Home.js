import './Home.css'
import Front from './Front/Front';
import Cardbox from './cardBox/Cardbox';
import Conclude from './Conclude/Conclude';
import ReviewCard from './ReviewCard/ReviewCard';
import Category from './Category/Category';
import { useEffect , useState } from 'react';
const Home = () => {

    const [ category, setCategory] = useState('All')

    const giveCategory = (e) => {
        setCategory(e)
     
    }

 
  
    return ( 
        <div className="home">
            <Front></Front>
            <Category handleCat={giveCategory}></Category>
            <Cardbox category={category}></Cardbox>
            <ReviewCard></ReviewCard>
            <Conclude></Conclude>
        </div>
     );
}
 
export default Home;