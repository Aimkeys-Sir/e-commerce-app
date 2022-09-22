import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

function App() {
  let history=useHistory()

  function handleNavigate(to){
    history.push(to)
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products">
          <ProductPage/>
        </Route>
        <Route exact path={"/cart"}>
          <CartPage/>          
        </Route>
        {/* add your Route here */}
        <Route exact to='/'>
          {/* add a button here with #handleNavigate passing the route */}
        <button onClick={()=>handleNavigate('/products')}>product</button>
        <button onClick={()=>handleNavigate('/cart')}>cart</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
