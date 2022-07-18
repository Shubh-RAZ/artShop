import './Cardbox.css'
import Card from '../Card/card';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import CartOrange from '../Assets/cartOrange';
import axios from 'axios';
const Cardbox = (props) => {
    const [ paintingData , setPaintingData ] = useState([])
    const [dataToBeShown , setDataToBeShown ] = useState([])
    const [paginatedFilteredData,setPaginatedFilteredData] = useState([])

    useEffect( () => {

        console.log('get data')
        
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

        axios.get('http://localhost:3500/art/getArt')
        .then(res =>{
            setPaintingData(res.data)
            setDataToBeShown(res.data)

           
            if(props.category === "All"){
                const paginatedFilteredData = filterData(res.data,pageNumber,12)
                console.log('paginated filtered',paginatedFilteredData)
                setPaginatedFilteredData(paginatedFilteredData)
            }
            else{
                const filtered = res.data.filter( dt =>  dt.category === props.category)
                const paginatedFilteredData = filterData(filtered,pageNumber,12)
                setPaginatedFilteredData(paginatedFilteredData)
            }

        })
        .catch(err =>{
            console.log(err)
        })

        console.log('categorys')
       
    },[props.category])
 



    const [ pageNumber , setPageNumber ] = useState(1) 
    const [ totalPaginationIndex , setPaginationIndex ] = useState() 
    const [ array , setArray ] = useState([])

    
    const filterData = ( data, page, maxLength) => {
        const start =  (( page - 1 ) * maxLength )
        // const filter = data.filter( (dt , ind) => ( ind >= start && ind < start + maxLength) )
        let filter = []
        console.log('data',data)
        data.map( (dt,ind) => {
            if(ind >= start && ind < start + maxLength){
                filter.push(dt)
            }
        })
        // console.log(filter)
        return filter
    }

    const handlePagination = (page) => {
        setPageNumber(page)
    }

    useEffect( () => {
        // const filtered = filterData(dataToBeShown,1,12)
        // console.log('page number')
        // console.log(paintingData)
        // console.log('category filter',categoryFilter)
        axios.get('http://localhost:3500/art/getArt')
        .then(res =>{
            setPaintingData(res.data)
            setDataToBeShown(res.data)

            if(props.category === "All"){
                const paginatedFilteredData = filterData(res.data,pageNumber,12)
                console.log('paginated filtered',paginatedFilteredData)
                setPaginatedFilteredData(paginatedFilteredData)
            }
            else{
                const filtered = res.data.filter( dt =>  dt.category === props.category)
                const paginatedFilteredData = filterData(filtered,pageNumber,12)
                setPaginatedFilteredData(paginatedFilteredData)
            }

        })
        .catch(err =>{
            console.log(err)
        })
        
        setPaginationIndex((paintingData.length/12 + 1))
        var ar= []
        var i
        for( i = 1 ; i <= ( paintingData.length / 12 + 1) ; i++){
            ar.push(i)
        }

        setArray(ar)
    } , [pageNumber])



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