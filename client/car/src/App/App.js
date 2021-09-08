import React from "react";
import "./App.css";
import ListCar from "../Container/ListCars";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Container/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListCar />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
