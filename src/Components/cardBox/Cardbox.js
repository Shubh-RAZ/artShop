import './Cardbox.css'
import Card from '../Card/card';
import paintingData from '../dataArray/paintingData';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import CartOrange from '../Assets/cartOrange';
const Cardbox = () => {
    const [ dataToBeShown , setDataToBeShown ] = useState(paintingData)
    const [ pageNumber , setPageNumber ] = useState(1) 
    const [ totalPaginationIndex , setPaginationIndex ] = useState() 
    const [ array , setArray ] = useState([])

    useEffect( () => {
        const filtered = filterData(1,12)
        setDataToBeShown(filtered)
        setPaginationIndex((paintingData.length/12 + 1))
        var ar= []
        var i
        for( i = 1 ; i <= ( paintingData.length / 12 + 1) ; i++){
            ar.push(i)
        }

        setArray(ar)
    } , [])

    const filterData = ( page , maxLength) => {
        const start =  (( page - 1 ) * maxLength )
        const filter = paintingData.filter( (dt , ind) => ( ind >= start && ind < start + maxLength))
        console.log(filter)
        return filter
    }

    const handlePagination = (page) => {
        setPageNumber(page)
        const filtered = filterData(page ,12)
        console.log(filtered)
        setDataToBeShown(filtered)
    }

 
    return ( 
        <React.Fragment>
                <div className="result-cart">
                    <div className="result-number">Showing 9 of 49 results</div>
                    <div className="cart-orange">
                        <div className="cart-number">1</div>
                        <CartOrange></CartOrange>
                    </div>
            </div>
        <div className="card-box">
            { dataToBeShown.map( dt => (
                       <Card></Card>
            ))
}
  
        </div>

    
        <div className="pagination">
          {
              array.map ( (data , index ) => (
                <div className={pageNumber === (index+1) ? "pagination-list-active" : "pagination-list" } onClick={() => handlePagination(index + 1) }> {index +1}</div>
              ))
          }
        </div>


        </React.Fragment>
     );
}
 
export default Cardbox;