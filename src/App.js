import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddNote from "./components/users/AddNote";
import EditNote from "./components/users/EditNote";
import Note from "./components/users/Note";

function App(props) {
  return (
    <Router>
      
      <div className="App">
        
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddNote} />
          <Route exact path="/notes/edit/:id" component={EditNote} />
          <Route exact path="/notes/:id" component={Note} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;
