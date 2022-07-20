import { useState } from 'react';
import axios from 'axios';
import Cart from '../Assets/cart';
import Heart from '../Assets/heart';
import './card.css'
const Card = (props) => {
    // console.log(props.data)
    const [ showDetail , setShowDetail ] = useState(false)
    const [ heartColor , setHeartColor ] = useState(true)
    const [data,setData] = useState(props.data)

    const handleAddCart = () => {
        var previousCarts = localStorage.getItem('cartItems')
        let itemId = props.data._id
        console.log(itemId)
        let newCart
        if(previousCarts){
            newCart = previousCarts + ',' + itemId
        }
        else{
            newCart = itemId
        }
        localStorage.setItem('cartItems',newCart) 
    }

    const handleHeart = (id) => {
        const updateObject = {
            id,
            increase:true
        }
        if(!heartColor){
            updateObject.increase = false
        }

        axios.post('http://localhost:3500/art/updateHeart',updateObject)
        .then(res => {
            console.log(res.data)
            const updatedData = data
            updatedData.hearts = res.data
            setData(updatedData)
        })
        .catch( err => {
            console.log(err)
        })
        setHeartColor(!heartColor)
    }
    return ( 
        <div className="box" >
            <div className="inside-box"  onMouseOver={ () => setShowDetail(true)} onMouseLeave={ () => setShowDetail(false)}  >
                <img src={data.location} style={{filter:showDetail ? 'blur(2px)' : null}}></img>
                <div className="details-img" style={{animation: showDetail ? 'up 2s linear 1 forwards' : 'down 2s linear forwards' , transition:'all 2s'} }>
                    <div className="content-img-box">
                        <div>
                            <div className="title">
                                <div className="title-name">{data.title}</div>
                                <div className="heart" onClick={() => handleHeart(data._id)} ><Heart color={heartColor ? '#fff' : '#ef5a50'}  ></Heart></div>
                            </div>

                            <div className="desc">{data.description}</div>
                            <div className="heart-count">{data.hearts} Hearts</div>
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