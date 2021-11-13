import React from 'react';
import Header from './Container/header'
import ProductListing from '../src/Container/ProductListing';
import ProductDetails from '../src/Container/ProductDetail';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router >
  
     <Header/>
                <Switch>
                   <Route  exact path='/' eaxct component={ProductListing}/>
                   <Route path='/courses' component ={ProductDetails}/>
                   <Route>404 NOT FOUND!! </Route>
                </Switch>
    
    </Router>
  );
}

export default App;
