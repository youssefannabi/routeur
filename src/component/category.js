import React from 'react';
import {Link, BrowserRouter, Route } from 'react-router-dom'
 


const Category=({match})=>{
return(
    
    <BrowserRouter>
    <div>
        <ul>
            <li>
                <Link to={`${match.url}/shoes`}  >Shoes</Link>
            </li>
            <li>
                <Link to={`${match.url}/boots`} >Boots</Link>
            </li>
            <li>
                <Link to={`${match.url}/footwear`}>Foot Wear</Link>
            </li>
        </ul>
        </div>
        <Route 
         path={`${match.path}/:name`}
  render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
    </BrowserRouter>
)
}
export default Category;