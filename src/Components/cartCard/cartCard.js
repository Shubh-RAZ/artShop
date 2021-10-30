import React , { useState} from 'react';
import Heart from '../Assets/heart';
import Cart from '../Assets/cart';
import './cartCard.css'
import Delete from '../Assets/delete';
const CartCard = (props) => {
    const [ showDetail , setShowDetail ] = useState(false)
    const [ heartColor , setHeartColor ] = useState(true)

    const handleDelete = () => {

        props.handleDelete(props.data._id)
    }
    return ( 
        <div className="cart-card">
            <div className="cart-img">
                <img src={props.data.location}></img>
            </div>
            <div className="item-desc">
               

     
                <div className="item-quantity">
                    <div className="quantity-name" style={{textTransform:'capitalize'}}>{props.data.title}</div>
                    <div className="quantity-number" onClick={handleDelete} ><Delete></Delete></div>
                </div>
                <div className="item-quantity">
                    <div className="quantity-name">Quantity</div>
                    <div className="quantity-number">1</div>
                </div>
                <div className="item-quantity">
                    <div className="quantity-name">Price</div>
                    <div className="quantity-number">INR {props.data.price}</div>
                </div>

            
                </div>
    </div>
     );
}
 
export default CartCard;