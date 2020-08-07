
import React  from 'react';
import { Link, Route ,BrowserRouter } from 'react-router-dom';

import home from './component/home'
import Category from './component/category';
import Login from './component/log';
import Products from './component/Products';
function App(){
    return (
      <BrowserRouter>
      <div>
      <ul>
      <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/Category">category</Link>
    </li>
    <li>
      <Link to="/Login">login</Link>
    </li>
    <li>
      <Link to="/Products">Products</Link>
    </li>
    </ul>
    </div>
    <div>
    <Route exact path='/' component={home}></Route>
    <Route path='/Category' component={Category}></Route>
    <Route  path='/Login' component={Login}></Route>
    <Route  path='/Products' component={Products}></Route>
    </div>
    </BrowserRouter>
          
        
        
    )
  }
  export default App ;