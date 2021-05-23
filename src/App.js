import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Project";
import './index.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
