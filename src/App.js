import { Route, useState, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';

function App() {
  let history=useHistory()

  function handleNavigate(to){
    history.push(to)

    const adminuser = {
      email: "admin@admin.com",
      password: "admin254"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Signin = details => {
      console.log(details);
    }

    const Signout = () => {
      console.log("Signout");
    }
  }
  return (
    <div className="App">
      <Switch>
        <Route to="/products">
          <ProductPage/>
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
