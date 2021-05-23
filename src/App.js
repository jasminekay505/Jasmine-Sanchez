import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Project";
import './index.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (

    <Router>
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
