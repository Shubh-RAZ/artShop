import { useState , useEffect } from "react";
import React from 'react';
import Confirm from "../Assets/confirm";
import './bookingConfirm.css'
import Navbar from "../Navbar/Navbar";
import Message from "../message";
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const BookingConfirm = () => {

    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ address , setAddress ] = useState('')
    const [ phoneNumber , setPhoneNumber ] = useState('')
    const [ showResult , setResult ] = useState(false)
    const [ mailSuccess , setMailSuccess ] = useState(false)

    const [ productsConfirm , setProductsConfirm ] = useState()

    const cartItems = localStorage.getItem('cartItems')
    let cartArray = cartItems.split(",")
    

    useEffect( () => {
        

    } , [] )

    console.log(productsConfirm)

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        if(e.target.name === 'address'){
            setAddress(e.target.value)
        }
        if(e.target.name === 'phoneNumber'){
            setPhoneNumber(e.target.value)
        }
    }

      
    const validateEmail = (email)  =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const validate = ({ name , email , address , phoneNumber }) => {
        var errobool = false

        const emailresult = validateEmail(email)
        if(!emailresult){
            errobool=true
        }
   
        if(name.length === 0){
            errobool=true
        }

        if(address.length === 0){
            errobool=true
        }
        if(phoneNumber.length === 0){
            errobool=true
        }

       return errobool
        
    }


    const handleSubmit = (e) =>{
        cartArray = cartArray.filter(item => item !== 'undefined'   )

        const data1 = {
            name_ : name,
            email_ : email,
            add : address,
            ph : phoneNumber,
            item : cartArray
        }

        const data = {
            name,
            email,
            address,
            phoneNumber
        }
        
        const error= validate(data)


        if(error){
            toast(`Please Check Your Data Once Again`)
        }
        else{
            axios.post('http://localhost:3500/art/mail' ,data1)
            .then( res => {
                setProductsConfirm(res.data)
            })

            .catch( err => {
                console.log('errr in cartpage')
            })
        }
        setResult(true)
    }

    return ( 
        <div style={{width:'100vw' , overflow:'hidden'}}>
         <ToastContainer></ToastContainer>
        { !showResult ?
        <div>
           <Navbar secondaryColor="#ef5a50" activeColor="#000"  ></Navbar>
        <div className="signup-whole">
      
        <div className="signup-img-confirm">
            <Confirm></Confirm>
        </div>
        <div className="signup-left-confirm">
    <form className="signup-form-confirm">
        <div className="name-signup">Name</div>
        <input name="name" value={name} onChange={handleChange} className="input-name-signup"></input>
        <div className="email-signup">Email</div>
        <input name="email" type="mail" value={email} onChange={handleChange} className="input-email-signup"></input>
        <div className="password-signup">Address</div>
        <input name="address" type="text" value={address} onChange={handleChange} className="input-password-signup"></input>
        <div className="confirm-password-signup">Phone Number</div>
        <input name="phoneNumber" type="number" value={phoneNumber} onChange={handleChange} className="input-confirm-password"></input>
        <div type="submit" onClick={handleSubmit} className="signup-btn" style={{background:'#DEF7FC' , color:'#000' , fontWeight:'bold'}}>Submit</div>
       
        
    </form>
    </div>
    </div> 
    </div> : <Message result={ mailSuccess ? "Success" : 'Failed'} message={ mailSuccess ? 'Thank You For Choosing us we will contact you soon' : 'Order failed due to technical issue please try again later'}></Message> }
    </div>
     );
}
 
export default BookingConfirm;