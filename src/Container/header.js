import React from 'react';
import { Table } from 'semantic-ui-react';


const Header =() => {

   

 

    return (
     <Table bg='dark'> 
         <td>
        <h2> $$ --- SHOPPCART --- $$ </h2></td>
        
        {/* <td onClick={() => viewCart()}>

        <img src={require("../images/cart.jpg").default } height='50px' width='50px' />
        </td> */}
     </Table>
       
    )
}
export default Header;