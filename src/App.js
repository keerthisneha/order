import React from "react";
import About from "./about";
import Home from "./Home";
import Navbar from "./data";
import Detail from "./detail";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
      </div>
      <Switch>
        <Route exact path="/Home">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route exact path="/:productId/details">
          <Detail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
