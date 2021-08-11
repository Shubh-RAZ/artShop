import logo from './logo.svg';
import './App.css';
import { Switch , Route } from 'react-router-dom'
import Login from './Components/login'
import Welcome from './Components/Welcome';
import Signup from './Components/signup';
import CartPage from './Components/Cart/cartPage';
import Home from './Components/Home';
// import Signup from './Components/signup'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/login" exact component={Login} ></Route>
        <Route path="/" exact component={Welcome} ></Route>
        <Route path="/signup" exact component={Signup} ></Route>
        <Route path="/cart" exact component={CartPage} ></Route>
      </Switch>

    </div>
  );
}

export default App;
