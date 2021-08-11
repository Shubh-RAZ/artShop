import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/card";
import './cartPage.css'
import CartCard from "../cartCard/cartCard";
const CartPage = () => {

    const [ confrimed , setConfirmed ] = useState(false)
    return ( 
        <React.Fragment>
            { !confrimed ? 
        <div className="cart-page">
            <Navbar secondaryColor="#ef5a50" activeColor="#000"  ></Navbar>
            <div className="cart-content">
                <div className="cart-desc">Showing 7 results</div>
                <div className="cart-swipeable-box">
               
                      <CartCard></CartCard>
                      <CartCard></CartCard>
                      <CartCard></CartCard>
               
                      <CartCard></CartCard>
                      <CartCard></CartCard>
                      <CartCard></CartCard>
                   
                </div>
            </div>

            <div className="confirm-all">Confirm All</div>
        </div> : <div></div> }
        </React.Fragment>
     );
}
 
export default CartPage;