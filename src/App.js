import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Homepage} />
       
      </Switch>
    </Router>
  );
};

export default App;
