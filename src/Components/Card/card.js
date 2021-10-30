import { useState } from 'react';
import Cart from '../Assets/cart';
import Heart from '../Assets/heart';
import './card.css'
const Card = (props) => {
    // console.log(props.data)
    const [ showDetail , setShowDetail ] = useState(false)
    const [ heartColor , setHeartColor ] = useState(true)

    const handleAddCart = () => {
        var previousCarts = localStorage.getItem('cartItems')
        const itemId = props.data._id
        const newCart = previousCarts + ',' + itemId
        // console.log(itemId)
        // console.log(previousCarts)
        console.log(newCart)
        localStorage.setItem('cartItems',newCart)

        
    }
    return ( 
        <div className="box">
            <div className="inside-box"  onMouseOver={ () => setShowDetail(true)} onMouseLeave={ () => setShowDetail(false)}  >
                <img src="./art.jpg" style={{filter:showDetail ? 'blur(2px)' : null}}></img>
                <div className="details-img" style={{animation: showDetail ? 'up 2s linear 1 forwards' : 'down 2s linear forwards' , transition:'all 2s'} }>
                    <div className="content-img-box">
                        <div>
                            <div className="title">
                                <div className="title-name">{props.data.title}</div>
                                <div className="heart" onClick={ () => {
                                    setHeartColor(!heartColor)
                                    }}><Heart color={heartColor ? '#fff' : '#ef5a50'}  ></Heart></div>
                            </div>

                            <div className="desc">{props.data.description}</div>
                            <div className="heart-count">{props.data.hearts} Hearts</div>
                            <div className="add-to-cart" onClick={handleAddCart}> <Cart></Cart></div>
                        </div>
                    </div>
                    <div className="buy-now" >
                        Buy now
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;