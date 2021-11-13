import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {fetchCourses } from './Products/ProductActions';

const ProductListing =()=>{
    const courses=useSelector((state)=> state.ProductReducers);
    console.log(courses,'jkfgekw..###')
    const dispatch= useDispatch();

    useEffect(() => {
       
          dispatch(fetchCourses())
        
      }, [])


console.log( courses, 'jhdbvbbbbslo');
    return (
          <div classname='ui grid container' >
       <ProductComponent/>
          </div>
    );
}
export default ProductListing;