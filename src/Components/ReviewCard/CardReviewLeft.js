import { useEffect, useState } from 'react';
import './ReviewCard.css'
const CardReviewLeft = (props) => {
    const [ array , setArray ] = useState([])
    useEffect( () => {
        var ary = []
        var i
        for( i=0 ; i< props.reviews.rating ; i++){
            ary.push(i)
        }

        setArray(ary)
        // console.log(array)
    } , [])


    return ( 
        <div className="card-review-left">
            <div className="review-image">
                <img src={props.reviews.img}></img>
            </div>
            <div className="review-content">
                <div className="reviewer-name-star">
                   <div className="reviewer-name">
                        {props.reviews.name} , {props.reviews.city}
                    </div>
                    <div className="review-stars">
                        {array.map( dt => (
                                           <img src="star-fill.png" className="star-fill" ></img>
    ))}
            
                    </div>
                </div>

                <div className="review-desc">
             {props.reviews.review}
                </div>
            </div>
        </div>
     );
}
 
export default CardReviewLeft;