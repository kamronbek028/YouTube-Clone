import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleVideo from "./components/SingleVideo";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video/:id" component={SingleVideo} />
        <Route exact path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
