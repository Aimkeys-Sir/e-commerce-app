import "../components/product.css";

import React from "react";

function Product({product}) {
//    console.log(product.product_name)
    return(
        <div>
            <div className="product_image">
                <div>
                    <img src={product.product_image} alt="imagehere"/>
                </div>
            </div>
            <div className="product_description">
                <h2 className="category">{product.product_category}</h2>
                <h1>{product.product_name}</h1>
                <p> &#9734;  Reviews</p>
                <p>{product.product_description}</p>
                <br/><br/>
                <h1>&#36; {product.price}</h1>
                <hr/>
                <h2>Dimensions(l,w,h) {product.dimensions}</h2>
                <button id="cart">ADD TO CART</button>
                <button id="buy">BUY NOW</button>
            </div>


            
        </div>
    );
}
export default Product;