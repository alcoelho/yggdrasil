import React, { Component } from 'react';
import './projects.css';

// const Projects = () => (
class Projects extends Component {
	state = {projects: []}

	componentDidMount() {
		fetch('/groups/219/projects')
		.then(res => res.json())
		.then(projects => this.setState({projects: projects}))
	}

	render() {
		return (
			<section className="projects-container">
				<div className="projects-title">Projetos</div>
				<div className="gohorse">go horse</div>
				<ul className="projects-list">
					{
					this.state.projects.map(project =>
					<li className="projects-item">
						<a href={project.web_url}>{project.description || project.name}</a>
						<p>Autor: {project.namespace && project.namespace.name}</p>
						<p>Mensagem do commit: </p>

						<p>Commitado em: {project.last_activity_at}</p>
					</li>
					)}
				</ul>
			</section>
		);
	}
}
export default Projects;