import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import { Button, Icon } from 'semantic-ui-react';
import { selectedDataCart, setSelectedcourses } from './Products/ProductActions';

const ProductComponent = () => {
    const history= useHistory();
    const coursesstate = useSelector((state) => state.ProductReducers); 
    console.log(coursesstate,'$$$hjfgh$$');
    const {courses} = coursesstate

    const dispatch = useDispatch();
    
   
const handleOpenCourses = (data) => {
    dispatch(setSelectedcourses({ selectedProduct :data}))
    dispatch(selectedDataCart({view :data}))
   history.push("/courses")

}
    return (
        <div classname="four column wide">
            {
                !!courses &&
                courses.courses.map((data) =>(
                    <div classname='ui link cards'>
                        
                        
                        <div classsname="card"><img classname="product-image" style={{ width: "200px" }} src={data.image} alt={data.name} />
                        </div>

                        <div classname="content">

                            <div classname='header'>{data.id}</div>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                          
                            <div> <Button  onClick={() => handleOpenCourses(data)} animated  content='Black' >
      <Button.Content visible>  ADD TO CART </Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button></div> <br/>
                        </div>
                    </div>
                ))
            }

        </div>
        
    );
}
export default ProductComponent;