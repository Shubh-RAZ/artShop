import CardReviewLeft from "./CardReviewLeft"
import review from "../dataArray/ReviewData";
const ReviewCard = () => {
    return ( 
        <div className="review-card">
            <div className="review-desktop">
                { review.map ( dt => (
                        <CardReviewLeft  reviews={dt}></CardReviewLeft>
                    
                ))
}

            
            </div>
        </div>
     );
}
 
export default ReviewCard;