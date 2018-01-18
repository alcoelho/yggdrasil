import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js';
import Projects from './Projects.js';

class Users extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

const Main = () => {
  return (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
  );
}

export default Main;