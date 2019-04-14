import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from  './components/Home';
import Login from  './components/Login';
import Register from  './components/Register';
import NotFound from  './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Activity from "./components/Activity";

class App extends Component {
  render() {
    return (

        <Router>

          <div className="container">
              <Switch>
                  <Route exact path="/" component = {Home} />
                  <Route exact path="/login" component = {Login} />
                  <Route exact path="/register" component = {Register} />
                  <Route exact path="/activity" component = {Activity} />
                  <Route component={NotFound}/>
              </Switch>


          </div>

        </Router>

    );
  }
}

export default App;
