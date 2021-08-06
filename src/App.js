import logo from './logo.svg';
import './App.css';
import { Switch , Route } from 'react-router-dom'
import Login from './Components/login'
import Welcome from './Components/Welcome';
import Signup from './Components/signup';
// import Signup from './Components/signup'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Login} ></Route>
        <Route path="/welcome" exact component={Welcome} ></Route>
        <Route path="/signup" exact component={Signup} ></Route>
      </Switch>

    </div>
  );
}

export default App;
