import './Cardbox.css'
import Card from '../Card/card';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import CartOrange from '../Assets/cartOrange';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Cardbox = (props) => {
    const [ paintingData , setPaintingData ] = useState([])
    const [dataToBeShown , setDataToBeShown ] = useState([])
    const [paginatedFilteredData,setPaginatedFilteredData] = useState([])
    const [array,setArray] = useState([])
    const [pageNumber,setPageNumber] = useState(1)
    const [categorySize,setCategorySize] = useState()

    const filterData = ( data, page, maxLength) => {
        const start =  (( page - 1 ) * maxLength )
        const filter = data.filter( (dt , ind) => ( ind >= start && ind < start + maxLength) )
        return filter
    }

        useEffect ( async ()=> {
            await axios.get('http://localhost:3500/art/getArt')
                .then(res =>{
                    // console.log('get data')
                    setPaintingData(res.data)
                    let filterCategory
                    if(props.category === 'All'){
                        filterCategory = res.data
                    }
                    else{
                        filterCategory = res.data.filter( dt => dt.category == props.category)
                    }
                    let i
                    let arr = [] 
                    setCategorySize(filterCategory.length)
                    for( i=1;i <= (filterCategory.length/12 + 1);i++){
                        arr.push(i)
                    }
                    setArray(arr)
                    setDataToBeShown(filterCategory)
                    const paginatedFilteredData = filterData(filterCategory,pageNumber,12)
                    setPaginatedFilteredData(paginatedFilteredData)
                    

        
                })
                .catch(err =>{
                    console.log(err)
                })
            
            // console.log('category changed')
            // console.log(paintingData)
        },[props.category,pageNumber])


        const handlePagination =(page) => {
            // console.log(page)
            setPageNumber(page)
        }
    return ( 
        <React.Fragment>
                <div className="result-cart">
                    <div className="result-number">Showing {categorySize <12 ? categorySize:12} of {categorySize} results</div>
                    <Link to="/cart" style={{textDecoration:'none'}}>
                    <div className="cart-orange">
                        {/* <div className="cart-number">1</div> */}
                        <CartOrange></CartOrange>
                    </div>
                    </Link>
                  
                   
            </div>
        <div className="card-box">
            { paginatedFilteredData.map( dt => (
                       <Card  data={dt}></Card>
            ))
}
  
        </div>

    
        <div className="pagination">
          {
              array.map ( (data , index ) => (
                <div className={pageNumber === (index+1) ? "pagination-list-active" : "pagination-list" } onClick={() => handlePagination(index + 1) }> 
                <div>{index +1}</div></div>
              ))
          }
        </div>


        </React.Fragment>
     );
}
 
export default Cardbox;