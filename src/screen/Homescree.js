import React from 'react';
import Product from '../data'
import './Homescree.css'
import Productcard from '../Component/Productcard';

const Homescree = () => {
  return (
    <div>
         {
            Product.map((product) =>(
               <Productcard key={product.id} product={product} />
            ))
         }
    </div>
  )
}

export default Homescree