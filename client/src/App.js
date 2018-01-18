import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js';
import Projects from './Projects.js';
import Users from './Users.js';
import Groups from './Groups.js';
import ProjectsByGroups from './ProjectsByGroups.js';

const Main = () => {
  return (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/groups">Groups</Link></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/groups" component={Groups}/>
      <Route exact path="/groups/:id/projects" component={ProjectsByGroups}/>
    </div>
  </Router>
  );
}

export default Main;