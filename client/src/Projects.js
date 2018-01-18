import React, { Component } from 'react';
import './Home.css';

class Projects extends Component {
  state = {projects: []}

  componentDidMount() {
    fetch('/projects')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <div className="Projects">
        <h1>Projects</h1>
        {this.state.projects.map(project =>
          <div key={project.id}>{project.name}</div>
        )}
      </div>
    );
  }
  // state = {projects: []}

  // componentDidMount() {
  //   fetch('/projects')
  //     .then(res => res.json())
  //     .then(projects => this.setState({ projects }));
  // }

  // render() {
  //   return (
  //     <div className="Projects">
  //       <h1>Projects</h1>
  //       {this.state.projects.map(project =>
  //         <div key={project.id}>{project.name}</div>
  //       )}
  //     </div>
  //   );
  // }  
}

export default Projects