import React from 'react';
import './projects.css';

const Projects = () => (
	<section className="projects-container">
		<div className="projects-title">Projetos</div>
		<div className="gohorse">go horse</div>
		<ul className="projects-list">
			<li className="projects-item">
				<a href="www.google.com">Duel Disk</a>
				<p>Autor: Seto Kaiba</p>
				<p>Mensagem do commit: Screw the rules</p>

				<p>Commitado em: 2018-01-01 18:15:02</p>
			</li>
			<li className="projects-item">
				<a href="www.google.com">Momentum</a>
				<p>Autor: Fudo Hakase</p>
				<p>Mensagem do commit: poize men</p>

				<p>Commitado em: 2018-01-01 18:15:01</p>
			</li>
			<li className="projects-item">
				<a href="www.google.com">Hamon</a>
				<p>Autor: ?</p>
				<p>Mensagem do commit: GREEN TORTOISE OVERDRIVE</p>

				<p>Commitado em: 2018-01-01 18:15:00</p>
			</li>
			<li className="projects-item">
				<a href="www.google.com">bubu</a>
				<p>Autor: aaa</p>
				<p>Mensagem do commit: AAAAAAAAA</p>

				<p>Commitado em: 2018-01-01 18:14:59</p>
			</li>
			<li className="projects-item">
				<a href="www.google.com">sei lá</a>
				<p>Autor: alguém</p>
				<p>Mensagem do commit: AAAAAAAAAAAAAAAAAAAA</p>

				<p>Commitado em: 2018-01-01 18:14:58</p>
			</li>
		</ul>
	</section>
);

export default Projects;