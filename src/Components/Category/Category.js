import Abstract from '../Assets/abstract'
import Landscape from '../Assets/Landscape'
import Lord from '../Assets/lord'
import Potrait from '../Assets/potrait'
import './Category.css'
const Category = () => {
    return ( 
        <div className="category">
            <div className="category-heading">
                Category
            </div>

            <div className="category-slide">
                <div className="category-list">
                    <div className="category-svg">
                        <Potrait></Potrait>
                    </div>

                    <div className="category-name">
                        Landscape 
                        <br></br>
                        Painting
                    </div>
                </div>
                <div className="category-list">
                    <div className="category-svg">
                        <Landscape></Landscape>
                    </div>

                    <div className="category-name">
                        Potrait 
                        <br></br>
                        Painting
                    </div>
                </div>
                <div className="category-list">
                    <div className="category-svg">
                        <Abstract></Abstract>
                    </div>

                    <div className="category-name">
                        Abstract
                        <br></br>
                        Painting
                    </div>
                </div>
                <div className="category-list">
                    <div className="category-svg">
                        <Lord></Lord>
                    </div>

                    <div className="category-name">
                        Lord 
                        <br></br>
                        Painting
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Category;