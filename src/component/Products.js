import React from 'react'
import '../App.css'
import {Link, BrowserRouter , Route} from 'react-router-dom'
function Products( {match}) {
    return (
        <BrowserRouter>
        <div>  
         <div className="pr" >
            <div  className="prbck">
             <h2>Products</h2>
             <ul>
            <li>
                <Link to={`${match.url}/ NIKE Liteforce Blue Sneakers  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.
                
                
                
                Available`}  >NIKE Liteforce Blue Sneakers      
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/ U.S. POLO ASSN. Slippers
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 


Proin molestie.

Available`} > U.S. POLO ASSN. Slippers
</Link>
            </li>
            <li>
                <Link to={`${match.url}/  ADIDAS Adispree Running Shoes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.




Available`
}> ADIDAS Adispree Running Shoes
</Link>
            </li>
            <li>
                <Link to={`${match.url}/ Lee Cooper Mid Sneakers Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.



out of stock`
}>Lee Cooper Mid Sneakers
</Link>
            </li>
        </ul>
             </div>
             <div><p>Please select a product.</p></div>
        </div> 
        </div>
           <Route 
           path={`${match.path}/:name`}
    render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
      </BrowserRouter>
    )
}

export default Products