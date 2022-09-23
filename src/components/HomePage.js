import React  from "react";
import ProductCard from "./ProductCard";
 
function Home({productList,setProductList}) {

  let products = productList.map((product) => (
    <ProductCard
      image_url={product.image_url}
      productName={product.product_name}
      productId={product.id}
      key={product.id}
      setProductList={setProductList}
      productList={productList}
    />
  ))
  
  return (
   
    <div className="container">
      <div className="row">{products}</div>
      </div>
    
  )
}
export default Home;
