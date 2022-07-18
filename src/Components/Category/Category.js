// import Abstract from '../Assets/abstract'
// import Landscape from '../Assets/Landscape'
// import Lord from '../Assets/lord'
// import Potrait from '../Assets/potrait'
import Landscape from '../Assets/landscape'
import Lord from '../Assets/lord'
import Portrait from '../Assets/portrait'
import All from '../Assets/All'

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
            <div className="category-list" onClick={ () => {handleCategory('All')}} >
                    <div className="category-svg">
                        <All></All>
                    </div>

                    <div className="category-name">
                        All
                        <br></br>
                        Paintings
                    </div>
                </div>

                <div className="category-list" onClick={ () => {handleCategory('Landscape')}} >
                    <div className="category-svg">
                        <Landscape></Landscape>
                    </div>

                    <div className="category-name">
                        Landscape 
                        <br></br>
                        Paintings
                    </div>
                </div>
                <div className="category-list" onClick={ () => {handleCategory('God')}}>
                    <div className="category-svg">
                        <Lord></Lord>
                    </div>

                    <div className="category-name">
                        God
                        <br></br>
                        Paintings
                    </div>
                </div>
                <div className="category-list" onClick={ () => {handleCategory('Portrait')}} >
                    <div className="category-svg">
                        <Portrait></Portrait>
                    </div>

                    <div className="category-name">
                        Portrait
                        <br></br>
                        Paintings
                    </div>
                </div>
                {/* <div className="category-list" onClick={ () => {handleCategory('video games and consoles')}}>
                    <div className="category-svg">
                        <Video></Video>
                    </div>

                    <div className="category-name">
                        Video
                        <br></br>
                        Games
                    </div>
                </div> */}
            </div>
        </div>
     );
}
 
export default Category;