import { useEffect, useState } from 'react';

import Product from './product';
import React from "react";

function Productlist(params) {
    const [product,setproduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9292/products')
        .then((res)=>res.json())
        .then( (output)=>setproduct(output[0]))
},[])
  console.log(product)
    return(
        <div>
            <Product product={product} />
        </div>
    );
}
export default Productlist;