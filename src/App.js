import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";

function App() {
  let history = useHistory();

  function handleNavigate(to) {
    history.push(to);
  }
  return (
    <div className="App">
      <Switch>
      <div>
        <Navbar />
      </div>
      <div className="row mt-3"></div>
        <Route to="/">
          <HomePage />
        </Route>
        <Route to="/products">
          <ProductPage />
        </Route>
        {/* add your Route here */}
        <Route exact to='/'>
          {/* add a button here with #handleNavigate passing the route */}
        <button onClick={()=>handleNavigate('/products')}>product</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
