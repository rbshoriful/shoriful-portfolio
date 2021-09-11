import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './components/Work/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/HeaderBottom/Home';

function App() {
  return (
    <div >
      <Header></Header>
       <Router>
        <Switch>
        <Route path="/about">
          <About></About>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/work">
          <Work></Work>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
        </Switch>
      </Router>     
      
    </div>
  );
}

export default App;
