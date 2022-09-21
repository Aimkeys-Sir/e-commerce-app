import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const url= "http://localhost:9292/products";

export default function Products() {

  const [products, setProducts] = useState([]);

  // load items from internet
  const itemFetcher = () => {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  };
// console.log(products)
  useEffect(itemFetcher, []);
  

  let productCards = products.map((product) => (
    <ProductCard
      name={product.product_name}
      image={product.image_name}
      id={product.id}
      price ={product.price}
      key={product.id}
    />
  ));

  return (
    <div className="container">
      products
      <div className="row">{productCards}</div>
      
    </div>
  );
}
