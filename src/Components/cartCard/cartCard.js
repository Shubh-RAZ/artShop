import React , { useState} from 'react';
import Heart from '../Assets/heart';
import Cart from '../Assets/cart';
import './cartCard.css'
import Delete from '../Assets/delete';
const CartCard = () => {

    const [ showDetail , setShowDetail ] = useState(false)
    const [ heartColor , setHeartColor ] = useState(true)
    return ( 
        <div className="cart-card">
            <div className="cart-img">
                <img src="./art.jpg"></img>
            </div>
            <div className="item-desc">
               

     
                <div className="item-quantity">
                    <div className="quantity-name">The Art Of Venice</div>
                    <div className="quantity-number"><Delete></Delete></div>
                </div>
                <div className="item-quantity">
                    <div className="quantity-name">Quantity</div>
                    <div className="quantity-number">1</div>
                </div>
                <div className="item-quantity">
                    <div className="quantity-name">Price</div>
                    <div className="quantity-number">INR 100</div>
                </div>

                <div className="plus-minus">
                    <div className="arith-box">
                        <p>+</p></div>
                    <div className="arith-number">1</div>
                    <div className="arith-box">
                        <p>-</p>
                    </div>
                </div>
                </div>
    </div>
     );
}
 
export default CartCard;