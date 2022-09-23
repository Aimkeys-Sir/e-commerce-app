import React,{useState,useEffect}from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";

function App() {
  const [productList, setProductList] = useState([]);
  const FETCH = () => {
    fetch("http://localhost:9292/products")
      .then((response) => response.json())
      .then((products) => {
    
        setProductList(products);
      });
  };

  useEffect(FETCH, []);

  let history=useHistory()

  function handleNavigate(to){
    history.push(to)
  }
  return (
    <div className="App">
      <Switch>
      <div>
        <Navbar />
      </div>
      <div className="row mt-3"></div>
        <Route to="/home">
        <HomePage productList={productList} setProductList={setProductList}/>
        </Route>
        <Route to="/products">
          <ProductPage />
        </Route>
        {/* add your Route here */}
        <Route exact to='/'>
          {/* add a button here with #handleNavigate passing the route */}
        <button onClick={()=>handleNavigate('/products')}>product</button>
        <button onClick={()=>handleNavigate('/home')}>home</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
