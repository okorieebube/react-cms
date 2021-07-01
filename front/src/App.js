import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './default/NavBar';
import Home from './default/Home';
import Footer from './default/Footer';
import Register from './default/Register';
import Login from './default/Login';
import Portfolio from './default/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>      
            <Route exact path="/login">
              <Login />
            </Route>      
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>               
            {/* <Route path="*"> */}
              {/* <NotFound /> */}
            {/* </Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
