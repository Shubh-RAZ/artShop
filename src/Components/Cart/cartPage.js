import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/card";
import './cartPage.css'
import CartCard from "../cartCard/cartCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const CartPage = () => {

    const [ ProductsInCart , setProductsInCart ] = useState([])

    const cartItems = localStorage.getItem('cartItems')
    const cartArray = cartItems.split(",")

    useEffect( () => {
        axios.post('http://localhost:3500/art/getArtById' ,cartArray)
        .then( res => {
            setProductsInCart(res.data)
        })

        .catch( err => {
            console.log('errr in cartpage')
        })
    } , [] )

    const handleDeleteInCartPage  = (id) => {
        console.log(id)
        let products = ProductsInCart
        const filtered = products.filter( dt => {
            return (dt._id != id)
        })

        console.log(filtered)
        setProductsInCart(filtered)

        let localCart = localStorage.getItem('cartItems')
        let cartArraydelete = localCart.split(',')

        let newlocalstring = ''
        cartArraydelete.map( (data,index) => {
            if(data == id){
                cartArraydelete.splice(index,1)
            }
       
        })
        cartArraydelete.map( (dt,index) => {
            if(index==0){
                newlocalstring += dt
            }
            else{
            newlocalstring += `,${dt}`

            }
        })
        localStorage.setItem('cartItems',newlocalstring)
        // console.log(newlocalstring.split(','))
        // console.log(cartArraydelete)
    }


    const [ confrimed , setConfirmed ] = useState(false)
    return ( 
        <React.Fragment>
            { !confrimed ? 
        <div className="cart-page">
            <Navbar secondaryColor="#ef5a50" activeColor="#000"  ></Navbar>
            <div className="cart-content">
                <div className="cart-desc-show">Showing {ProductsInCart.length} results</div>
                <div className="cart-swipeable-box">
                   {
                       ProductsInCart.map( dt => (
                           <CartCard data={dt} handleDelete={handleDeleteInCartPage}></CartCard>
                       ))
                   }
               
                  
                   
                </div>
            </div>

          <Link to="/booking" style={{textDecoration:'none'}}>  <div className="confirm-all">Confirm All</div> </Link>
        </div> : <div></div> }
        </React.Fragment>
     );
}
 
export default CartPage;