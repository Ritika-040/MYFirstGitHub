import React, {useEffect} from 'react'
import { useSelector,useDispatch} from "react-redux";
import { useHistory } from "react-router";
import { Rating } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { setSelectedcourses } from './Products/ProductActions';


const Profile = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const coursesstate = useSelector((state) => state.ProductReducers); 
    const { deletedata,selectedProduct} = coursesstate;
    console.log(selectedProduct,'selecteddd...')

    
    useEffect(() => {
return()=>{
     dispatch(setSelectedcourses({deletedata}))
}
    },[])

    
    return(
<><br/><br/>

            <div class="ui card"><div class="image"><img  style={{ height: "200px"}} style={{width:'200px'}} src={selectedProduct.image} /></div>
            <div class="content"><div class="header">PRODUCT</div><div class="meta"> {selectedProduct.id}<br/></div>
            <div class="description"></div></div>{selectedProduct.name}<div class="extra content"><a>
                <i aria-hidden="true" class="user icon">
                </i> {selectedProduct.description}</a></div></div>
                Rate your Product:
                <Rating maxRating={5} defaultRating={0} icon='star' size='small' /><br/><br/><br/>
                <div><button class="ui fluid button" onClick={() => history.goBack()}>SEARCH MORE PRODUCTS</button></div>
                
                Added Successfully.
                <div><div role="list" class="ui huge divided middle aligned list"><div role="listitem" class="item fade visible transition">
                        <img src={selectedProduct.image} class="ui avatar image"/>
                    <div class="content"><div class="header">YOUR CART</div></div></div><div role="listitem" class="item fade visible transition">
                       </div></div></div>
</>
    )
}
    
export default Profile
