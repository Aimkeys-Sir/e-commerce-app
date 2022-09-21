import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';

function App() {
  let history=useHistory()

  function handleNavigate(to){
    history.push(to)
  }
  return (
    <div className="App">
      {/* add a button here with #handleNavigate passing the route */}
      <button onClick={()=>handleNavigate('/products')}>product</button>
      <Switch>
        <Route to="/products">
          <ProductPage/>
        </Route>
        {/* add your Route here */}
      </Switch>
    </div>
  );
}

export default App;
