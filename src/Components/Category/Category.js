// import Abstract from '../Assets/abstract'
// import Landscape from '../Assets/Landscape'
// import Lord from '../Assets/lord'
// import Potrait from '../Assets/potrait'
import Baby from '../Assets/baby.js'
import Kid from '../Assets/kid.js'
import Allages from '../Assets/allages.js'
import Video from '../Assets/Video.js'

import './Category.css'
const Category = (props) => {

    const handleCategory = (e) => {
        props.handleCat(e)
    }
    return ( 
        <div className="category">
            <div className="category-heading">
                Category
            </div>

            <div className="category-slide">
                <div className="category-list" onClick={ () => {handleCategory('baby toys')}} >
                    <div className="category-svg">
                        <Baby></Baby>
                    </div>

                    <div className="category-name">
                        Baby 
                        <br></br>
                        Toys
                    </div>
                </div>
                <div className="category-list" onClick={ () => {handleCategory('kids toys')}}>
                    <div className="category-svg">
                        <Kid></Kid>
                    </div>

                    <div className="category-name">
                        Kids
                        <br></br>
                        Toys
                    </div>
                </div>
                <div className="category-list" onClick={ () => {handleCategory('All ages')}} >
                    <div className="category-svg">
                        <Allages></Allages>
                    </div>

                    <div className="category-name">
                        All Ages
                        <br></br>
                        Toys
                    </div>
                </div>
                <div className="category-list" onClick={ () => {handleCategory('video games and consoles')}}>
                    <div className="category-svg">
                        <Video></Video>
                    </div>

                    <div className="category-name">
                        Video
                        <br></br>
                        Games
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Category;