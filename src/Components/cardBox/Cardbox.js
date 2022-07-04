import './Cardbox.css'
import Card from '../Card/card';
// import paintingData from '../dataArray/paintingData';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import CartOrange from '../Assets/cartOrange';
import axios from 'axios';
const Cardbox = (props) => {
    const [ paintingData , setPaintingData ] = useState([])
    const [dataToBeShown , setDataToBeShown ] = useState([])

    useEffect( () => {
        
        axios.get('http://localhost:3500/art/getArt')
        .then(res =>{
            setPaintingData(res.data)
            setDataToBeShown(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
        } , [])

    useEffect( () => {
        const filtered = paintingData.filter( dt =>  dt.category === props.category)
        setDataToBeShown(filtered)
        // console.log(filtered)
    },[props.category])
 



    const [ pageNumber , setPageNumber ] = useState(1) 
    const [ totalPaginationIndex , setPaginationIndex ] = useState() 
    const [ array , setArray ] = useState([])

    useEffect( () => {
        const filtered = filterData(1,12)
        setPaintingData(filtered)
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
        // console.log(filter)
        return filter
    }

    const handlePagination = (page) => {
        setPageNumber(page)
        const filtered = filterData(page ,12)
        console.log(filtered)
        setPaintingData(filtered)
    }

    // console.log(dataToBeShown)
    // console.log(props.category)
 
    return ( 
        <React.Fragment>
                <div className="result-cart">
                    <div className="result-number">Showing 9 of 49 results</div>
                    <div className="cart-orange">
                        {/* <div className="cart-number">1</div> */}
                        <CartOrange></CartOrange>
                    </div>
            </div>
        <div className="card-box">
            { dataToBeShown.map( dt => (
                       <Card  data={dt}></Card>
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