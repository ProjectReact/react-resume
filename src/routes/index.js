import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "../layouts/App";
import Skill from "../containers/Skill";
import Contact from "../containers/Contact";
import About from "../containers/About";
import Project from "../containers/Project";
import Home from "../containers/Home";

export default (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="skill" component={Skill} />
        <Route path="contact" component={Contact} />
        <Route path="about" component={About} />
        <Route path="project" component={Project} />
        <Route path="home" component={Home} />
      </Route>
  </Router>
)

/*
/ App + Home
/ about App + About
*/
