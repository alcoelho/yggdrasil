import React, { Component } from 'react';
import './Home.css';

async function fetchMultiple(inst) {
  let res = await fetch('/groups/' + inst.props.match.params.id + '/users/')
  let users = await res.json()

  let res2 = await fetch('/groups/' + inst.props.match.params.id + '/projects/')
  let projects = await res2.json()
  return users, projects
}

class ProjectsByGroups extends Component {
  state = {projects: [], users: []}

  componentDidMount() {
    fetch('/groups/' + this.props.match.params.id + '/users/')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));

    fetch('/groups/' + this.props.match.params.id + '/projects/')
      .then(res => res.json())
      .then(projects => this.setState({ projects: projects})); // tá clonando os usuários WHY

      
  }

  render() {
    return (
      <div className="Groups">
        <h1>Grupos</h1>
        <h2>Projetos</h2>
        {this.state.projects.map(project =>
          <div key={project.id}>{project.name}</div>
        )}
        {console.log(this.state.projects)}
        <h2>Usuarios</h2>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default ProjectsByGroups